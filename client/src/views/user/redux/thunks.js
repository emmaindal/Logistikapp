import { updateSalespositions, updateActiveSalesposition } from './actions'
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
