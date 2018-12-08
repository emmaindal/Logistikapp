import { updateSalespositions, updateProducts, addSalespositionAction, removeSalespositionAction } from './actions'
import axios from 'axios'

export const fetchSalespositions = url => async dispatch => {
  try {
    const res = await axios.get(url)
    dispatch(updateSalespositions(res.data))
  } catch (error) {
    throw new error()
  }
}

export const fetchProducts = url => async dispatch => {
    try {
      const res = await axios.get(url)
      dispatch(updateProducts(res.data))
    } catch (error) {
      throw new error()
    }
  }

export const addSalesposition = (url, name) => async dispatch => {
    try {
        let data = {name: name, products: {}}
        const res = await axios.post(url, data)
        dispatch(addSalespositionAction(res.data))
        console.log('added', res.data)
      } catch (error) {
        console.log(error)
        throw new error()
      }
}

export const removeSalesposition = (url, selectedPosition) => async dispatch => {
    try {
        let fullURL = `${url}/${selectedPosition.id}`
        await axios.delete(fullURL)
        dispatch(removeSalespositionAction(selectedPosition))
        console.log('successfully removed: ', selectedPosition)
      } catch (error) {
        console.log(error)
        throw new error()
      }
}
