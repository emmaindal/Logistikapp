const initalState = {
  salespositions: [],
  settingsIsOpen: false,
  selectedPosition: '',
  newPositionIsOpen: false,

};

let salespositionList;

export default (state = initalState, action) => {

  switch (action.type) {
    case "TOGGLE_SETTINGS":
      return {
        ...state,
        settingsIsOpen: !state.settingsIsOpen,
      };
    case "SELECTED_SALESPOSITION":
      return {
        ...state,
        selectedPosition: action.selectedPosition
      }
    case "UPDATE_SALESPOSITION":
      // Kanske bör brytas ut eller göras i Action?
      // failsafe if name is not changed
      if (action.newName === undefined) {
        action.newName = action.selectedPosition.name
      }
      // Gets index of current salesposition
      let i = state.salespositions.indexOf(action.selectedPosition)
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = { "name": action.newName, "id": action.selectedPosition.id }
      return {
        ...state,
        salespositions: salespositionList,
        settingsIsOpen: !state.settingsIsOpen
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
      let newPosObj = { "name": action.newPositionName }
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
      }
    default:
      return state;
  }
};
