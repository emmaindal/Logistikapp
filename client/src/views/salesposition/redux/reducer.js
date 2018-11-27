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
      return {
        ...state,
        settingsIsOpen: !state.settingsIsOpen,
      }
    case "TOGGLE_NEWPOSITION":
      return {
        ...state,
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
    
      
    case "SELECTED_SALESPOSITION":
      return {
        ...state,
        selectedPosition: action.selectedPosition
      }
    case "UPDATE_SALESPOSITION":
      // Gets index of current salesposition
      let i = state.salespositions.indexOf(action.selectedPosition)
      salespositionList = state.salespositions
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = { "name": action.name, "id": action.selectedPosition.id, "products": action.selectedPosition.products }
      return {
        ...state,
        salespositions: salespositionList,
        selectedMainProduct: undefined,
        selectedSecondProduct: undefined,
        selectedProduct: undefined,
      }
    case "REMOVE_SALESPOSITION":
      // Kanske bör brytas ut eller göras i Action?
      // failsafe if name is not changed
      if (action.newName === undefined) {
        action.newName = action.selectedPosition.name
      }
      salespositionList = state.salespositions
      salespositionList = salespositionList.filter(saleposition => saleposition !==action.selectedPosition)
      return {
        ...state,
        salespositions: salespositionList,
        settingsIsOpen: !state.settingsIsOpen
      }
    case "ADD_SALESPOSITION":
      let newPosObj = { "name": action.newPositionName, "products": {}}
      salespositionList = state.salespositions
      salespositionList.push(newPosObj)
      return {
        ...state,
        salespositions: salespositionList,
        newPositionIsOpen: !state.newPositionIsOpen
      }


    // PRODUCT REDUCERS 
    case "SET_MAINPRODUCT":
      return {
        ...state,
        selectedMainProduct: action.selectedProduct
      }
    case "SET_SECONDPRODUCT":
        return {
        ...state,
        selectedSecondProduct: action.selectedProduct
      }
    case "REMOVE_PRODUCT":
      let updatedSelectedPosition = action.selectedPosition
      // removes the product from object
      delete updatedSelectedPosition.products[action.removeProduct]
      // ...state.selectedPosition (solution for nested states, otherwise redux doesnt notice updates)
      return {
        ...state,
        selectedPosition: {
          ...state.selectedPosition,
          updatedSelectedPosition
        }
      }
    default:
      return state;
  }
};
