import { IOrderDetailState } from "../../../Interfaces/State/IOrderDetailState";
import { bindLimit, bindOrderDetail, bindPage } from "../../../Store/Actions/OrderDetailAction";
import { GET_ORDER_DETAIL, UPDATE_LIMIT, UPDATE_PAGE } from "../../../Store/ActionTypes/OrderDetailActionType";


describe('OrderDetail action suite', () => {
  it('Should bind order detail', () => {
      const orderDetail:IOrderDetailState={
        orderDetail:[{  OrderId:1,
            Date:"2020-04-01",
            Name:"test",
            Address:"test",
            ShipTo:"test",
            PaymentMethod:"test",
            Amount:1}],
        limit:5,
        page:1
      }
    let actual = {
      type: GET_ORDER_DETAIL,
      orderDetail
    };
    let result = bindOrderDetail(orderDetail);
    expect(result).toEqual(actual);
  });
  it('Should bind limit', () => {
 
  let actual = {
    type: UPDATE_LIMIT,
    limit:5
  };
  let result = bindLimit(5);
  expect(result).toEqual(actual);
});
it('Should bind page', () => {
 
    let actual = {
      type: UPDATE_PAGE,
      page:1
    };
    let result = bindPage(1);
    expect(result).toEqual(actual);
  });
});