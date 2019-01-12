import { combineReducers } from 'redux'
import menuReducer from '../views/navbar/redux/reducer'
import loginReducer from '../views/login/redux/reducer'
import salespositionReducer from '../views/salesposition/redux/reducer'
import userReducer from '../views/user/redux/reducer'
import ordersReducer from '../views/orders/redux/reducer'

export default combineReducers({
  menu: menuReducer,
  login: loginReducer,
  salesposition: salespositionReducer,
  user: userReducer,
  orders: ordersReducer
})
