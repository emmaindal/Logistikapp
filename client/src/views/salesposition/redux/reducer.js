const initalState = {
  salespositions: [],
  settingsIsOpen: false,
  selectedPosition: '',
  newPositionIsOpen: false,
  products: [],
  selectedMainProduct: undefined,
  selectedSecondProduct: undefined,
};

let salespositionList;

export default (state = initalState, action) => {

  switch (action.type) {
    case "TOGGLE_SETTINGS":
      return {
        ...state,
        settingsIsOpen: !state.settingsIsOpen,
      }
    case "SELECTED_SALESPOSITION":
      return {
        ...state,
        selectedPosition: action.selectedPosition
      }
    case "UPDATE_SALESPOSITION":
      // Gets index of current salesposition
      let i = state.salespositions.indexOf(action.selectedPosition)
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = { "name": action.name, "id": action.selectedPosition.id, "products": action.selectedPosition.products }
      return {
        ...state,
        salespositions: salespositionList,
        settingsIsOpen: !state.settingsIsOpen,
        selectedMainProduct: undefined,
        selectedProduct: undefined,
      }
    case "REMOVE_SALESPOSITION":
      // Kanske bör brytas ut eller göras i Action?
      // failsafe if name is not changed
      if (action.newName === undefined) {
        action.newName = action.selectedPosition.name
      }
      salespositionList = salespositionList.filter(saleposition => saleposition !==action.selectedPosition)
      return {
        ...state,
        salespositions: salespositionList,
        settingsIsOpen: !state.settingsIsOpen
      }
    case "TOGGLE_NEWPOSITION":
      return {
        ...state,
        newPositionIsOpen: !state.newPositionIsOpen
      }
    case "ADD_SALESPOSITION":
      let newPosObj = { "name": action.newPositionName, "products": {}}
      salespositionList.push(newPosObj)
      return {
        ...state,
        salespositions: salespositionList,
        newPositionIsOpen: !state.newPositionIsOpen
      }
    case "INITIAL_STATE":
      salespositionList = action.initialSalespositions;
      return {
        ...state,
        salespositions: action.initialSalespositions,
        products: action.productsRes
      }
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
      
    default:
      return state;
  }
};
