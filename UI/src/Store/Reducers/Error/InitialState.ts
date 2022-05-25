import { IErrorState } from "../../../Interfaces/State/IErrorState";
import { ERROR_TYPE, STATUS_CODES } from "../../../Utility/Enums";
export const InitialState:IErrorState = 
{
      errorType: ERROR_TYPE.NONE,
      errorMessage:"",
      statusCode:STATUS_CODES.NONE
  }