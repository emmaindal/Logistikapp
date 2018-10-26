import { combineReducers } from "redux";
import exampleReducer from "../views/example/redux/reducer";

export default combineReducers({
  example: exampleReducer
});
