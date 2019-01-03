import { setOrders, setCompleted} from './actions'
import axios from 'axios'

export const fetchOrders = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(setOrders(res.data))
  } catch (error) {
    throw new error()
  }
}

export const updateCompleted = order => async dispatch => {
  try {
    order.completed = order.completed ? false : true;
    const res = await axios.put(`http://localhost:3001/orders/${order.id}`, order)
    dispatch(setCompleted(res.data))
  }
  catch (error) {
    console.log(error)
    throw new error()
  }
}