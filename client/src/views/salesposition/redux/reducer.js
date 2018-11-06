const initalState = {
  salespositions: ['Huvudbar', 'E22', 'Träsk', 'Mamas', 'VIP', 'Staropramen', 'Sweden', 'Rockklassiker', 'Vinkeln'],
  settingsIsOpen: false,
  selectedPosition: ''

};

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
      let newList = state.salespositions
      // Replaces the currently selected salesposition with its new name
      newList[i] = action.newName
      return {
        ...state,
        salespositions: newList,
        settingsIsOpen: !state.settingsIsOpen
      }
    default:
      return state;
  }
};
