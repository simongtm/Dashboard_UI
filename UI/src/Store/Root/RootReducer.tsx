import {combineReducers } from "redux";
import { IState } from "./RootState";
import { intlReducer } from "../Reducers/Intl/IntlReducer";
import UserReducer from "../Reducers/UserReducer/UserReducer";
import { ErrorReducer } from "../Reducers/Error/ErrorReducer";
import OrderReducer from "../Reducers/OrderReducer/OrderReducer";
export default combineReducers<IState>({
  user:UserReducer,
  error:ErrorReducer,
  intl:intlReducer,
  order:OrderReducer
  });