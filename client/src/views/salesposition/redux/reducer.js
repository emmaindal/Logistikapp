const initalState = {
  salespositions: [],
  settingsIsOpen: false,
  selectedPosition: '',
  newPositionIsOpen: false,

};

const salespositionList = initalState.salespositions

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
        action.newName = action.selectedPosition
      }

      // Gets index of current salesposition
      let i = state.salespositions.indexOf(action.selectedPosition)
      //let newList = state.salespositions
      // Replaces the currently selected salesposition with its new name
      salespositionList[i] = action.newName
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
      //let newList = state.salespositions
      console.log('-----')
      salespositionList.push(action.newPosition)
      return {
        ...state,
        salespositions: salespositionList,
        newPositionIsOpen: !state.newPositionIsOpen
      }
    default:  
      return state;
  }
};
