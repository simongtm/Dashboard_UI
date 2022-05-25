import { ERROR_TYPE, STATUS_CODES } from "../../Utility/Enums";
import { UPDATE_ERROR_MESSAGE } from "../ActionTypes/ErrorActionType";

export const updateErrorMessage = (
  errorType: ERROR_TYPE,
  errorMessage: string,
  statusCode?: STATUS_CODES
) => ({
  type: UPDATE_ERROR_MESSAGE,
  errorType,
  errorMessage,
  statusCode,
});
