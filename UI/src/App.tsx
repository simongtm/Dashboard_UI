import React from "react";
import { connect } from "react-redux";
import { IState } from "./Store/Root/RootState";
import { injectIntl } from "react-intl";
import SignIn from "./Component/LoginComponent";
import { bindAuthenticationStatus, getLoginDetail } from "./Store/Actions/UserActions";
import { useEffect } from "react";
import { IUserState } from "./Interfaces/State/IUserState";
import { useHistory } from "react-router-dom";
import { ERROR_TYPE } from "./Utility/Enums";
import { updateErrorMessage } from "./Store/Actions/ErrorActions";


interface IProps {
  intl: any;
  login: (emailId: string, password: string) => void;
  userDetails:IUserState;
  bindAuthenticateStatus:(isAuthenticated:boolean)=>void;
  bindError:(errorType:ERROR_TYPE,errorMessage:string)=>void;
}
const App: React.FC<IProps> = (props) => {
  const { login,userDetails:{isAuthenticated,emailId},bindError,bindAuthenticateStatus } = props;
  const history = useHistory();

  useEffect(()=>{
if(emailId&&!isAuthenticated)
{
  bindAuthenticateStatus(true);
  history.push("/Dashboard");
}
// eslint-disable-next-line
  },[emailId])
  return (
    <div>
      <SignIn login={login} handleError={bindError}/>
    </div>
  );
};
const mapStateToProps = (state: IState) => ({
  userDetails:state.user,
});
const mapDispatchToProps = (dispatch: any) => ({
  login: (emailId: string, password: string) =>
    dispatch(getLoginDetail(emailId, password)),
  bindError:(errorType:ERROR_TYPE,errorMessage:string)=>dispatch(updateErrorMessage(errorType,errorMessage)),
  bindAuthenticateStatus:(isAuthenticated:boolean)=>dispatch(bindAuthenticationStatus(isAuthenticated))
});
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App));
