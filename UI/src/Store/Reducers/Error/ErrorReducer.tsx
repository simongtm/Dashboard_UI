import { InitialState } from "./InitialState"
import { UPDATE_ERROR_MESSAGE } from "../../ActionTypes/ErrorActionType"
import { IErrorState } from "../../../Interfaces/State/IErrorState";
import { ERROR_TYPE, STATUS_CODES } from "../../../Utility/Enums";

const bindError=(state:IErrorState,errorType:ERROR_TYPE,errorMessage:string,statusCode:STATUS_CODES)=>{
    return{
        ...state,
        errorType:errorType,
        errorMessage:errorMessage,
        statusCode:statusCode
    }
}
export const ErrorReducer=(state = InitialState, action)=>{
  switch(action.type)
  {
case UPDATE_ERROR_MESSAGE:{
    return bindError(state,action.errorType,action.errorMessage,action.statusCode);
}
  default:{
      return state;
  }
    
  }
  
}