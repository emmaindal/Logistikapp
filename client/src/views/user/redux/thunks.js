import { updateSalespositions, updateCategories } from './actions'
import axios from 'axios'

export const fetchSalespositions = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(updateSalespositions(res.data))
  } catch (error) {
    throw new error()
  }
}

export const fetchSalesPositionCategories = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(updateCategories(res.data))
  } catch (error) {
    throw new error()
  }
}
