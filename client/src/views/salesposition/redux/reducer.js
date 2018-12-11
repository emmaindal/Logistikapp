const initalState = {
  salespositions: [],
  settingsIsOpen: false,
  selectedPosition: '',
  newPositionIsOpen: false,
  products: [],
  selectedProductCategory: undefined,
  selectedMainProduct: undefined,
  selectedSecondProduct: undefined,
};

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
    case "SET_CATEGORY":
      return {
        ...state,
        selectedProductCategory: action.category,
        selectedMainProduct: undefined,
        selectedSecondProduct: undefined
      }
    case "SET_MAINPRODUCT":
      return {
        ...state,
        selectedMainProduct: action.mainProduct,
        selectedSecondProduct: undefined
      }
    case "SET_SECONDPRODUCT":
      return {
        ...state,
        selectedSecondProduct: action.secondProduct
      }

    case "SET_NEWPRODUCTS":
      // kortare obj
      var selectedPos = state.selectedPosition.products
      //dryck
      var prodCat = state.selectedProductCategory
      // öl
      var mainprod = action.mainProduct
      // falcon
      var secondprod = action.secondProduct
      // pris etc.
      var newProd = state.products[prodCat][mainprod][secondprod]

      var updatedProducts;
      if(selectedPos[prodCat]){
        updatedProducts = {
          ...selectedPos,
          [prodCat]: {
            ...selectedPos[prodCat],
            [mainprod]: {
              ...selectedPos[prodCat][mainprod],
              [secondprod]:newProd
            }
          }
        }
      } else {
        // if it doesnt have prodcat it wont have children:        
        updatedProducts = {
          ...selectedPos,
          [prodCat] : {
            [mainprod]: {
              [secondprod] : newProd
            }
          }
        }

      }
      return {
        ...state,
        selectedPosition: {
          ...state.selectedPosition,
          products: updatedProducts
        }
      }

    case "REMOVE_PRODUCT":
      var updatedSelectedPosition = state.selectedPosition
      // removes the product from object
     delete updatedSelectedPosition.products[action.category][action.product][action.targetId]
      // removes if there is nothing in parent object.
      if (Object.keys(updatedSelectedPosition.products[action.category][action.product]).length === 0 ){
        delete updatedSelectedPosition.products[action.category]
      }
      return {
        ...state,
        selectedPosition: {
          ...state.selectedPosition,
          products: updatedSelectedPosition.products
        }
      }

    case "SAVE_SALESPOSITION":
      // Gets index of current salesposition
      var originalObj = state.salespositions.filter(saleposition => {
        return saleposition.name == action.selectedPosition.name
      })
      var i = state.salespositions.indexOf(originalObj[0])
      var salespositionList = state.salespositions
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = action.selectedPosition
      return {
        ...state,
        salespositions: salespositionList,
        selectedMainProduct: undefined,
        selectedSecondProduct: undefined,
        selectedProduct: undefined,
        selectedProductCategory: undefined,
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
