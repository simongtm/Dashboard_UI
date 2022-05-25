import { IOrderDetailState } from "../../../Interfaces/State/IOrderDetailState";
import {
GET_ORDER_DETAIL, UPDATE_LIMIT, UPDATE_PAGE
} from "../../ActionTypes/OrderDetailActionType";
import { InitialState } from "./InitialState";

const mapOrderData = (state:IOrderDetailState, orderDetail:any) => {
  return {
    ...state,
    orderDetail:orderDetail
    };
};
const mapPageLimit = (state:IOrderDetailState, limit:number) => {
    return {
      ...state,
      limit:limit
      };
  };
  const mapPageNumber = (state:IOrderDetailState, page:number) => {
    return {
      ...state,
      page:page
      };
  };
const OrderReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAIL: {
      return mapOrderData(state, action.orderDetail);
    }
    case UPDATE_PAGE: {
        return mapPageNumber(state, action.page);
      }
      case UPDATE_LIMIT: {
        return mapPageLimit(state, action.limit);
      }
    default:
      return state;
  }
};

export default OrderReducer;
