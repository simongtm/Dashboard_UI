import { IUserState } from "../../../Interfaces/State/IUserState";
import { bindAuthenticationStatus, bindStatus, bindUserDetail } from "../../../Store/Actions/UserActions";
import { CHANGE_AUTHENTICATION_STATUS, LOGIN, UPDATE_STATUS } from "../../../Store/ActionTypes/UserActionType";


describe('User action suite', () => {
  it('Should bind user detail', () => {
      const userData:IUserState={
    firstName:"test",
    lastName:"test",
    emailId:"test@gmail.com"
      }
    let actual = {
      type: LOGIN,
      userData
    };
    let result = bindUserDetail(userData);
    expect(result).toEqual(actual);
  });
  it('Should bind status', () => {
 
  let actual = {
    type: UPDATE_STATUS,
    status:"test"
  };
  let result = bindStatus("test");
  expect(result).toEqual(actual);
});
it('Should bind authentication status', () => {
 
    let actual = {
      type: CHANGE_AUTHENTICATION_STATUS,
      isAuthenticated:true
    };
    let result = bindAuthenticationStatus(true);
    expect(result).toEqual(actual);
  });
});