import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { IOrderDetailState } from "../Interfaces/State/IOrderDetailState";

const columns = [
  { id: "OrderId", label: "Order Id", minWidth: 170 },
  { id: "Date", label: "Date", minWidth: 100 },
  {
    id: "Name",
    label: "Name",
    sortable: false,
    minWidth: 170,
    align: "right",
  },
  {
    id: "Address",
    label: "Address",
    minWidth: 170,
    align: "right",
  },
  {
    id: "ShipTo",
    label: "Ship to",
    minWidth: 170,
    align: "right",
  },
  {
    id: "PaymentMethod",
    label: "Payment Payment",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Amount",
    label: "Sale Amount",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  head: {
    background: "#3f51b5",
    color: "#fff",
  },
});
interface IProps {
  handleIndex: (index: number) => void;
  orderData: IOrderDetailState;
  selectedIndex: number;
  setPage: (pageNumber: number) => void;
  setLimit: (limit: number) => void;
}
const OrdersComponent: React.FC<IProps> = (props) => {
  const {
    handleIndex,
    orderData: { orderDetail, page, limit },
    setLimit,
    setPage,
  } = props;
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLimit(+event.target.value);
    setPage(1);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align ? "right" : "left"}
                  style={{ minWidth: column.minWidth }}
                  className={classes.head}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetail.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.OrderId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align ? "right" : "left"}
                        onClick={() => handleIndex(index)}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 20, 100]}
        component="div"
        count={400}
        rowsPerPage={limit}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default OrdersComponent;
