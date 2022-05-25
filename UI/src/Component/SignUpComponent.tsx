import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { IState } from "../Store/Root/RootState";
import { registerUserData } from "../Store/Actions/UserActions";
import { IUserState } from "../Interfaces/State/IUserState";
import { ERROR_TYPE } from "../Utility/Enums";
import { updateErrorMessage } from "../Store/Actions/ErrorActions";
import { useHistory } from "react-router-dom";
import { getTranslationValue } from "../Utility/Utility";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
interface IProps {
  register: (userData: IUserState) => void;
  userDetails: IUserState;
  intl?:any;
  bindError: (errorType: ERROR_TYPE, errorMessage: string) => void;
}
const SignUp: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const Email_Regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const { register, bindError,intl } = props;

  const handleRegistration = () => {
    if (!firstName) {
      bindError(ERROR_TYPE.ERROR, getTranslationValue("FIRST_ANME_ERROR",intl));
    } else if (!lastName) {
      bindError(ERROR_TYPE.ERROR, getTranslationValue("EMAIL_ERROR",intl));
    } else if (!email) {
      bindError(ERROR_TYPE.ERROR, getTranslationValue("LAST_NAME_ERROR",intl));
    } else if (!Email_Regex.test(email)) {
      bindError(ERROR_TYPE.ERROR, getTranslationValue("EMAIL_FORMAT_ERROR",intl));
    } else if (!password) {
      bindError(ERROR_TYPE.ERROR, getTranslationValue("PASSWORD_ERROR",intl));
    } else {
      const userData: IUserState = {
        firstName: firstName,
        lastName: lastName,
        emailId: email,
        password: password,
      };
      register(userData);
      history.push("/");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         <FormattedMessage id="LABEL_SIGNUP"/>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRegistration}
          >
            <FormattedMessage id="LABEL_SIGNUP"/>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
              <FormattedMessage id="LABEL_ACCOUNT_EXISTS"/>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
const mapStateToProps = (state: IState) => ({
  userDetails: state.user,
});
const mapDispatchToProps = (dispatch: any) => ({
  register: (userData: IUserState) => dispatch(registerUserData(userData)),
  bindError: (errorType: ERROR_TYPE, errorMessage: string) =>
    dispatch(updateErrorMessage(errorType, errorMessage)),
});
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(SignUp));
