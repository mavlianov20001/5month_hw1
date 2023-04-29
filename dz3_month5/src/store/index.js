import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { counterReducer } from "./counterReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});
export const store = createStore(rootReducer);
