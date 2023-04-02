import handleCart from "./handleCart";

//combine multiple reducers
import { combineReducers } from "redux";

//root reducer which has all reducers
const rootReducer = combineReducers(
    {
    //   myNumber:changeTheNumber
    handleCart
    }
);

export default rootReducer;