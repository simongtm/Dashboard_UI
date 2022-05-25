import { ERROR_TYPE, STATUS_CODES } from "../../Utility/Enums";

export interface IErrorState{
    errorType:ERROR_TYPE,
    errorMessage:string,
    statusCode?:STATUS_CODES
}