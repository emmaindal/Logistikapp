const initalState = {
  category: '',
  salespositions: {}
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
    default:
      return state
  }
}
