import { IOrderDetailState } from "../../Interfaces/State/IOrderDetailState";
import { getOrderDetailUrl } from "../../Utility/ApiEndpoints";
import { ERROR_TYPE, STATUS_CODES } from "../../Utility/Enums";
import { httpRequest } from "../../Utility/HttpClient";
import {
  GET_ORDER_DETAIL,
  UPDATE_LIMIT,
  UPDATE_PAGE,
} from "../ActionTypes/OrderDetailActionType";
import { updateErrorMessage } from "./ErrorActions";

export const bindOrderDetail = (orderDetail: IOrderDetailState) => ({
  type: GET_ORDER_DETAIL,
  orderDetail,
});
export const bindLimit = (limit: number) => ({
  type: UPDATE_LIMIT,
  limit,
});
export const bindPage = (page: number) => ({
  type: UPDATE_PAGE,
  page,
});
export const getOrderData = (limit: number, page: number) => {
  return (dispatch: any) => {
    return httpRequest(getOrderDetailUrl(limit, page), "GET", {}, {}, undefined)
      .then((res: any) => {
        if (res.status === STATUS_CODES.SUCCESS) {
          dispatch(bindOrderDetail(res.data?.length > 0 ? res.data : []));
        } else if (res.status === STATUS_CODES.UNAUTHORIZED) {
          dispatch(
            updateErrorMessage(
              ERROR_TYPE.ERROR,
              "UnAuthorized access",
              STATUS_CODES.UNAUTHORIZED
            )
          );
          sessionStorage.removeItem("userToken");
        }
      })
      .catch((err) => {
        dispatch(console.log(err));
      });
  };
};
