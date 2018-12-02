const initalState = {
  category: '',
  salespositions: {},
  categories: {}
}

export default (state = initalState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        category: action.category
      }
    case 'UPDATE_SALESPOSITIONS':
      return {
        ...state,
        salespositions: action.salespositions
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
