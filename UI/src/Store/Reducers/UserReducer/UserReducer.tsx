import { IUserState } from "../../../Interfaces/State/IUserState";
import {
  LOGIN,
  REGISTER,
  UPDATE_STATUS,
  CHANGE_AUTHENTICATION_STATUS
} from "../../ActionTypes/UserActionType";
import { InitialState } from "./InitialState";

const loginSuccess = (state: IUserState, action) => {
  const { FirstName, LastName, EmailId } = action;
  return {
    ...state,
    firstName: FirstName,
    lastName: LastName,
    emailId: EmailId
    };
};
const registerSuccess = (state: IUserState, status: string) => {
  return { ...state, status: status };
};
const updateStatusSuccess = (state: IUserState, status: string) => {
  return { ...state, status: status };
};
const updateAuthenticatedStatus = (state: IUserState, isAuthenticated: boolean) => {
  return { ...state, isAuthenticated: isAuthenticated };
};
const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return loginSuccess(state, action.userData);
    }

    case REGISTER: {
      return registerSuccess(state, action.status);
    }
    case UPDATE_STATUS: {
      return updateStatusSuccess(state, action.status);
    }
    case CHANGE_AUTHENTICATION_STATUS: {
      return updateAuthenticatedStatus(state, action.isAuthenticated);
    }
    default:
      return state;
  }
};
export default UserReducer;
