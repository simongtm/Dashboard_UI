import { updateErrorMessage } from "../../../Store/Actions/ErrorActions";
import { UPDATE_ERROR_MESSAGE } from "../../../Store/ActionTypes/ErrorActionType";
import { ERROR_TYPE } from "../../../Utility/Enums";


describe('Error action suite', () => {
  it('Should update the error message', () => {
    let actual = {
      type: UPDATE_ERROR_MESSAGE,
      errorType:ERROR_TYPE.ERROR,
      errorMessage:"TEST",
      statusCode:200
    };
    let result = updateErrorMessage(ERROR_TYPE.ERROR,"TEST",200);
    expect(result).toEqual(actual);
  });
});