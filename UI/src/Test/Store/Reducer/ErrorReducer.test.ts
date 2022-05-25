import { ErrorReducer } from '../../../Store/Reducers/Error/ErrorReducer';
import { InitialState } from '../../../Store/Reducers/Error/InitialState';
import { UPDATE_ERROR_MESSAGE } from '../../../Store/ActionTypes/ErrorActionType';
import { ERROR_TYPE } from '../../../Utility/Enums';

describe('Error reducer test suite', () => {
  it('Should update error message', () => {
    const action = {
        type: UPDATE_ERROR_MESSAGE,
        errorType:ERROR_TYPE.ERROR,
        errorMessage:"TEST",
        statusCode:200
    };
    const result = ErrorReducer(InitialState, action);
    expect(result.errorType).toBe(ERROR_TYPE.ERROR);
  });
});