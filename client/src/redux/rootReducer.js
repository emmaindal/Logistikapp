import { combineReducers } from "redux";
import exampleReducer from "../views/example/redux/reducer";
import toggleMenu from "../views/navbar/redux/reducer";

export default combineReducers({
  example: exampleReducer,
  menu: toggleMenu
});
