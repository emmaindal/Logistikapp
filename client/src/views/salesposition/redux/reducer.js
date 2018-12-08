const initalState = {
  salespositions: [],
  settingsIsOpen: false,
  selectedPosition: '',
  newPositionIsOpen: false,
  products: [],
  selectedMainProduct: undefined,
  selectedSecondProduct: undefined,
};
var salespositionList;

export default (state = initalState, action) => {

  switch (action.type) {
    case "TOGGLE_SETTINGS":
      console.log(state.salespositions)
      console.log(state.selectedPosition)
      return {
        ...state,
        settingsIsOpen: !state.settingsIsOpen,
        selectedPosition: '',
        selectedMainProduct: undefined,
        selectedSecondProduct: undefined,
      }

    case "TOGGLE_NEWPOSITION":
      return {
        ...state,
        newPositionIsOpen: !state.newPositionIsOpen
      }

    case "SELECTED_SALESPOSITION":
      var selectedPos = action.selectedPosition
      return {
        ...state,
        selectedPosition: selectedPos
      }

    case "ADD_SALESPOSITION":
      return {
        ...state,
        salespositions: [...state.salespositions, action.salesposition],
        newPositionIsOpen: !state.newPositionIsOpen
      }

    // Initial state
    case "UPDATE_SALESPOSITIONS":
      return {
        ...state,
        salespositions: action.salespositions
      }

    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: action.products
      }

    case "SET_MAINPRODUCT":
      return {
        ...state,
        selectedMainProduct: action.mainProduct
      }
    case "SET_SECONDPRODUCT":
      return {
        ...state,
        selectedSecondProduct: action.secondProduct
      }

    case "SET_NEWPRODUCTS":
      console.log(state.selectedPosition)
      var mainprod = action.mainProduct
      var secondprod = action.secondProduct
      var newProd = state.products.find(product => {
        return product[mainprod]
      })
      return {
        ...state,
        selectedPosition: {
          ...state.selectedPosition,
          products: {
            ...state.selectedPosition.products,
            [secondprod]: newProd[mainprod][secondprod]
          }
        }
      }

    case "REMOVE_PRODUCT":
      var updatedSelectedPosition = state.selectedPosition
      // removes the product from object
      delete updatedSelectedPosition.products[action.targetId]
      console.log(updatedSelectedPosition)
      console.log(state.selectedPosition)
      console.log(state.salespositions)
      return {
        ...state,
        selectedPosition: {
          ...state.selectedPosition,
          products: updatedSelectedPosition.products
        }
      }

    case "SAVE_SALESPOSITION":
      // Gets index of current salesposition
      let originalObj = state.salespositions.filter(saleposition => {
        return saleposition.name == action.selectedPosition.name
      })
      let i = state.salespositions.indexOf(originalObj[0])
      salespositionList = state.salespositions
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = action.selectedPosition
      return {
        ...state,
        salespositions: salespositionList,
        selectedMainProduct: undefined,
        selectedSecondProduct: undefined,
        selectedProduct: undefined,
        selectedPosition: ''
      }

    case "REMOVE_SALESPOSITION":

      if (action.newName === undefined) {
        action.newName = action.selectedPosition.name
      }
      salespositionList = state.salespositions
      salespositionList = salespositionList.filter(saleposition => saleposition !== action.selectedPosition)
      return {
        ...state,
        salespositions: salespositionList,
        settingsIsOpen: !state.settingsIsOpen
      }
    default:
      return state;
  }
};
