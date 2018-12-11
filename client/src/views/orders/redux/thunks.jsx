import {  } from './actions'
import axios from 'axios'

export const fetchOrders = url => async dispatch => {
  try {
    const res = await axios.get(url)
    //dispatch(updateSalespositions(res.data))
  } catch (error) {
    throw new error()
  }
}
