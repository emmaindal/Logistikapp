import {
  updateSalespositions,
  updateActiveSalesposition,
  addOrder
} from './actions'
import axios from 'axios'

export const fetchSalespositions = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(updateSalespositions(res.data))
  } catch (error) {
    throw new error()
  }
}

export const fetchSpecificSalesposition = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(updateActiveSalesposition(res.data))
  } catch (error) {
    throw new error()
  }
}

export const submitOrder = (url, data) => async dispatch => {
  try {
    const res = await axios.post(url, data)
    dispatch(addOrder(res.data))
  } catch (error) {
    throw new error()
  }
}
