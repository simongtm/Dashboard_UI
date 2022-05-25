import OrderReducer from '../../../Store/Reducers/OrderReducer/OrderReducer';
import { InitialState } from '../../../Store/Reducers/OrderReducer/InitialState';
import {  GET_ORDER_DETAIL, UPDATE_LIMIT, UPDATE_PAGE} from '../../../Store/ActionTypes/OrderDetailActionType';
import { IOrderDetailState } from '../../../Interfaces/State/IOrderDetailState';

describe('Order reducer test suite', () => {
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
      let action = {
        type: GET_ORDER_DETAIL,
        orderDetail
      };
      let result = OrderReducer(InitialState,action);
      expect(result.orderDetail).toBeDefined();
    });
    it('Should bind limit', () => {
 
        let action  = {
          type: UPDATE_LIMIT,
          limit:5
        };
    const result = OrderReducer(InitialState, action);
    expect(result.limit).toBe(5);
  });
  it('Should bind page', () => {
 
    let action = {
      type: UPDATE_PAGE,
      page:1
    };
    const result = OrderReducer(InitialState, action);
    expect(result.page).toBe(1);
  });
});