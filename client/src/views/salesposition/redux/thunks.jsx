import { updateSalespositions, updateProducts, addSalespositionAction } from './actions'
import axios from 'axios'

export const fetchSalespositions = url => async dispatch => {
  try {
    const res = await axios.get(url)
    console.log(res.data)
    dispatch(updateSalespositions(res.data))
  } catch (error) {
    throw new error()
  }
}

export const fetchProducts = url => async dispatch => {
    try {
      const res = await axios.get(url)
      console.log(res)
      dispatch(updateProducts(res.data))
    } catch (error) {
      throw new error()
    }
  }

export const addSalesposition = (url, name) => async dispatch => {
    try {
        let data = {name: name, products: {}}
        const res = await axios.post(url, data)
        console.log(res.data)
        dispatch(addSalespositionAction(res.data))

      } catch (error) {
        console.log(error)
        throw new error()
      }
}
