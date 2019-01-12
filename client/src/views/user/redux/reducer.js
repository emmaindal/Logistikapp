const initalState = {
  category: '',
  salespositions: {},
  salesposition: { name: '', products: {}, id: '' },
  activeProductCategory: '',
  activeProduct: '',
  activeProductVolume: 0,
  order: { salesposition: '', category: '', product: '', volume: '' }
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
    case 'UPDATE_ACTIVE_PRODUCTCATEGORY':
      return {
        ...state,
        activeProductCategory: action.productCategory
      }
    case 'UPDATE_ACTIVE_PRODUCT':
      return {
        ...state,
        activeProduct: action.product
      }
    case 'UPDATE_ACTIVE_PRODUCT_VOLUME':
      return {
        ...state,
        activeProductVolume: action.volume
      }
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    case 'PLACE_ORDER':
      return {
        ...state,
        order: action.order,
        activeProductCategory: '',
        activeProduct: '',
        activeProductVolume: 0
      }
    default:
      return state
  }
}
