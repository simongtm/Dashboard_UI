import { Snackbar } from "@material-ui/core";
import React from "react";
import { updateErrorMessage } from "../Store/Actions/ErrorActions";
import { IState } from "../Store/Root/RootState";
import { ERROR_TYPE } from "../Utility/Enums";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { bindAuthenticationStatus } from "../Store/Actions/UserActions";
interface MyState {
  hasError: boolean;
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class ErrorBoundary extends React.Component<any, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.props.bindError(ERROR_TYPE.NONE, "");
    this.props.bindAuthentication(false);
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error occured!</h1>;
    }
    if (this.props.error.errorType !== ERROR_TYPE.NONE) {
      return (
        <>
          <Snackbar
            open={this.props.error.errorType !== ERROR_TYPE.NONE}
            autoHideDuration={5000}
            onClose={this.handleClose}
          >
            <Alert
              onClose={this.handleClose}
              severity={this.props.error.errorType}
            >
              {this.props.error.errorMessage}
            </Alert>
          </Snackbar>
          {this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}
const mapStateToProps = (state: IState) => ({
  userDetails: state.user,
  error: state.error,
});
const mapDispatchToProps = (dispatch: any) => ({
  bindError: (errorType: ERROR_TYPE, errorMessage: string) =>
    dispatch(updateErrorMessage(errorType, errorMessage)),
  bindAuthentication: (isAuthenticated: boolean) =>
    dispatch(bindAuthenticationStatus(isAuthenticated)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
