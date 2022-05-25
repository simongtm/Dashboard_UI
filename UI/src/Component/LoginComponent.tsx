import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
interface IProps {
  login: (emailId: string, password: string) => void;
  intl?: any;
  handleError: (errorType: string, errorMessage: string) => void;
}
const SignIn: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { login, handleError, intl } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    if (!email) {
      handleError("error", getTranslationValue("EMAIL_ERROR", intl));
      return false;
    }
    if (!password) {
      handleError("error", getTranslationValue("PASSWORD_ERROR", intl));
      return false;
    }
    login(email, password);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage id="LABEL_SIGNIN" />
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e?.target?.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setPassword(e?.target?.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submit}
          >
            <FormattedMessage id="LABEL_SIGNIN" />
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/Registration" variant="body2">
                <FormattedMessage id="LABEL_CREATE_ACCOUNT" />
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignIn;
