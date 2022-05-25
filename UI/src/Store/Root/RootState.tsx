import { IUserState } from "../../Interfaces/State/IUserState";
import { IIntlState } from "../../Interfaces/State/IIntlState";
import { IErrorState } from "../../Interfaces/State/IErrorState";
import { IOrderDetailState } from "../../Interfaces/State/IOrderDetailState";

export type IState = {
   user: IUserState,
   error:IErrorState
   intl:IIntlState,
   order:IOrderDetailState
}