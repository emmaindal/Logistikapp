export const setCategory = category => {
  return {
    type: 'SET_CATEGORY',
    category
  }
}

export const updateSalespositions = salespositions => {
  return {
    type: 'UPDATE_SALESPOSITIONS',
    salespositions
  }
}
export const updateActiveSalesposition = salesposition => {
  return {
    type: 'UPDATE_ACTIVE_SALESPOSITION',
    salesposition
  }
}

export const updateActiveProductCategory = productCategory => {
  console.log(productCategory)
  return {
    type: 'UPDATE_ACTIVE_PRODUCTCATEGORY',
    productCategory
  }
}

export const updateActiveProduct = product => {
  return {
    type: 'UPDATE_ACTIVE_PRODUCT',
    product
  }
}

export const updateActiveProductVolume = volume => {
  return {
    type: 'UPDATE_ACTIVE_PRODUCT_VOLUME',
    volume
  }
}

export const updateCategories = categories => {
  return {
    type: 'UPDATE_CATEGORIES',
    categories
  }
}

export const addOrder = order => {
  return {
    type: 'PLACE_ORDER',
    order
  }
}
