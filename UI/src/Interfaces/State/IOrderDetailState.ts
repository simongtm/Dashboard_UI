import { IOrderDetail } from "../IOrderDetail";

export interface IOrderDetailState{
    orderDetail:Array<IOrderDetail>,
    limit:number,
    page:number
}