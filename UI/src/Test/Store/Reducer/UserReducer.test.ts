import UserReducer from '../../../Store/Reducers/UserReducer/UserReducer';
import { InitialState } from '../../../Store/Reducers/UserReducer/InitialState';
import { CHANGE_AUTHENTICATION_STATUS, LOGIN, UPDATE_STATUS } from '../../../Store/ActionTypes/UserActionType';

describe('User reducer test suite', () => {
  it('Should update user data', () => {
    const userData:any={
        FirstName:"test",
        LastName:"test",
        EmailId:"test@gmail.com"
          }
        let action = {
          type: LOGIN,
          userData
        };
    const result = UserReducer(InitialState, action);
    expect(result.emailId).toBe("test@gmail.com");
  });
  it('Should update status', () => {
    let action = {
        type: UPDATE_STATUS,
        status:"test"
      };
    const result = UserReducer(InitialState, action);
    expect(result.status).toBe("test");
  });
  it('Should bind authentication status', () => {
 
    let action = {
      type: CHANGE_AUTHENTICATION_STATUS,
      isAuthenticated:true
    };
    const result = UserReducer(InitialState, action);
    expect(result.isAuthenticated).toBeTruthy();
  });
});