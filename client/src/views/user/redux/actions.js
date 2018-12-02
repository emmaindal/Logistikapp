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

export const updateCategories = categories => {
  return {
    type: 'UPDATE_CATEGORIES',
    categories
  }
}
