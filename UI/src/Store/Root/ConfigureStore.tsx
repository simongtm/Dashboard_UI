import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import RootReducer from "./RootReducer";
const middlewares:any[]=[];
middlewares.push(thunk)

export const store=applyMiddleware(...middlewares)(createStore)(RootReducer);