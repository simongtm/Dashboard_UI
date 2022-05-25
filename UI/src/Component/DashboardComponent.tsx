import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { mainListItems } from "./ListItemsComponent";
import Deposits from "./DespositsComponent";
import Orders from "./OrdersComponent";
import Chart from "./ChartComponent";
import { useEffect } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { STATUS_CODES } from "../Utility/Enums";
import {
  bindLimit,
  bindPage,
  getOrderData,
} from "../Store/Actions/OrderDetailAction";
import { IState } from "../Store/Root/RootState";
import { IErrorState } from "../Interfaces/State/IErrorState";
import { IOrderDetailState } from "../Interfaces/State/IOrderDetailState";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { IUserState } from "../Interfaces/State/IUserState";
import {
  bindAuthenticationStatus,
  bindUserDetail,
} from "../Store/Actions/UserActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));
interface IProps {
  orderData: IOrderDetailState;
  getOrderData: (limit: number, page: number) => void;
  setPageNumber: (page: number) => void;
  setLimit: (limit: number) => void;
  resetUserDetail: (userData: IUserState) => void;
  bindAuthenticateStatus: (isAuthenticated: boolean) => void;
  error: IErrorState;
}
const Dashboard: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    error,
    orderData: { orderDetail, limit, page },
    orderData,
    setLimit,
    setPageNumber,
    getOrderData,
    resetUserDetail,
    bindAuthenticateStatus,
  } = props;
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (
      !sessionStorage.getItem("userToken")
    ) {
      history.push("/");
    } else {
      getOrderData(limit, page);
    }

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (
      error.statusCode === STATUS_CODES.UNAUTHORIZED ||
      error.statusCode === STATUS_CODES.NOT_FOUND ||
      error.statusCode === STATUS_CODES.BADREQUEST
    ) {
      history.push("/");
    } else if (error.statusCode === STATUS_CODES.USER_ALREADY_EXISTS) {
      history.push("/Registration");
    }
    // eslint-disable-next-line
  }, [error, error.statusCode]);
  useEffect(() => {
    getOrderData(limit, page);
    // eslint-disable-next-line
  }, [limit, page]);
  const logoutHandler = () => {
    sessionStorage.removeItem("userToken");
    resetUserDetail({ emailId: "", firstName: "", lastName: "" });
    bindAuthenticateStatus(false);
    history.push("/");
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReportVisible, setReportVisibility] = useState(true);
  const [isOrdersVisible, setOrdersVisibility] = useState(true);
  const [isSaleVisible, setSalesVisibility] = useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleMenuClick = (name) => {
    if (name === "Dashboard") {
      setReportVisibility(true);
      setOrdersVisibility(true);
      setSalesVisibility(true);
    } else if (name === "Orders") {
      setReportVisibility(false);
      setOrdersVisibility(true);
      setSalesVisibility(false);
    } else if (name === "Reports") {
      setReportVisibility(true);
      setOrdersVisibility(false);
      setSalesVisibility(false);
    } else if (name === "Sale") {
      setReportVisibility(false);
      setSalesVisibility(true);
      setOrdersVisibility(false);
    }
  };
  const handleSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon onClick={logoutHandler} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems(handleMenuClick)}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            {isReportVisible && (
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart orderData={orderDetail} />
                </Paper>
              </Grid>
            )}
            {/* Recent Deposits */}
            {isSaleVisible && (
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits
                    selectedIndex={selectedIndex}
                    orderData={orderDetail}
                  />
                </Paper>
              </Grid>
            )}
            {/* Recent Orders */}
            {isOrdersVisible && (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders
                    handleIndex={handleSelectedIndex}
                    orderData={orderData}
                    selectedIndex={selectedIndex}
                    setLimit={setLimit}
                    setPage={setPageNumber}
                  />
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
const mapStateToProps = (state: IState) => ({
  error: state.error,
  orderData: state.order,
});
const mapDispatchToProps = (dispatch: any) => ({
  getOrderData: (limit: number, page: number) =>
    dispatch(getOrderData(limit, page)),
  resetUserDetail: (userData: IUserState) => dispatch(bindUserDetail(userData)),
  setPageNumber: (page: number) => dispatch(bindPage(page)),
  setLimit: (limit: number) => dispatch(bindLimit(limit)),
  bindAuthenticateStatus: (isAuthenticated: boolean) =>
    dispatch(bindAuthenticationStatus(isAuthenticated)),
});
export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
