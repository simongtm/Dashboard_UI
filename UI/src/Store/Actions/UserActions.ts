import { IUserState } from "../../Interfaces/State/IUserState";
import { loginUrl, registrationUrl } from "../../Utility/ApiEndpoints";
import { ERROR_TYPE, STATUS_CODES } from "../../Utility/Enums";
import { httpRequest } from "../../Utility/HttpClient";
import { CHANGE_AUTHENTICATION_STATUS, LOGIN, REGISTER, UPDATE_STATUS } from "../ActionTypes/UserActionType";
import { updateErrorMessage } from "./ErrorActions";
export const bindStatus = (status: string) => ({
  type: UPDATE_STATUS,
  status
});
export const bindUserDetail = (userData: IUserState) => ({
  type: LOGIN,
  userData,
});
export const bindRegistrationStatus = (userData: IUserState) => ({
  type: REGISTER,
  userData,
});
export const bindAuthenticationStatus = (isAuthenticated: boolean) => ({
  type: CHANGE_AUTHENTICATION_STATUS,
  isAuthenticated,
});
export const getLoginDetail = (email:string,password:string) => {
    if(!sessionStorage.getItem("userToken"))
    {
        sessionStorage.setItem("userToken",btoa(email + ":" + password));
    }
  return (dispatch: any) => {
    return httpRequest(loginUrl, "GET", {}, {}, undefined)
      .then((res: any) => {
        if (res.status === 200&&!res.data["statusCode"]) {
          dispatch(bindUserDetail(res.data?.length > 0 ? res.data[0] : {}));
        } else {
          sessionStorage.removeItem("userToken");
          dispatch(bindStatus(res.data["statusCode"]));
          dispatch(updateErrorMessage(ERROR_TYPE.ERROR, res.data?.message,STATUS_CODES.NOT_FOUND));
        }
      })
      .catch((err) => {
        sessionStorage.removeItem("userToken");
        dispatch(updateErrorMessage(ERROR_TYPE.ERROR, "Error occured!",STATUS_CODES.BADREQUEST));
      });
  };
};
export const registerUserData = (userData:IUserState) => {
  return (dispatch: any) => {
    return httpRequest(registrationUrl, "POST", userData, {}, undefined)
      .then((res: any) => {
        if (res.status === 200&&!res.data["statusCode"]) {
          dispatch(bindStatus("201"));
        } else {
          dispatch(bindStatus(res.data["statusCode"]));
          dispatch(updateErrorMessage(ERROR_TYPE.ERROR, res.data?.message,STATUS_CODES.USER_ALREADY_EXISTS));
        }
      })
      .catch((err) => {
        dispatch(updateErrorMessage(ERROR_TYPE.ERROR,"Error Occurred!",STATUS_CODES.BADREQUEST));
      });
  };
};