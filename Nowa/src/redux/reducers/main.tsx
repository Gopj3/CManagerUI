import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { authUserReducer } from "../../Authentication/store/reducers/auth.duck";

const rootred = combineReducers({
  cartreducer,
  authUserReducer,
});

export default rootred;
