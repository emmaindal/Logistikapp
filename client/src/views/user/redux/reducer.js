const initalState = {
  category: '',
  salespositions: {},
  salesposition: { name: '', products: {}, id: '' }
}

export default (state = initalState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      }
    case 'UPDATE_SALESPOSITIONS':
      return {
        ...state,
        salespositions: action.salespositions
      }
    case 'UPDATE_ACTIVE_SALESPOSITION':
      return {
        ...state,
        salesposition: action.salesposition
      }
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}
