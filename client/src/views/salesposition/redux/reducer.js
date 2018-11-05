const initalState = {
  salespositions: ['Huvudbar', 'E22', 'Träsk', 'Mamas', 'VIP', 'Staropramen', 'Sweden', 'Rockklassiker', 'Vinkeln'],
  settingsIsOpen: false,
  selectedPosition : ''
  
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "TOGGLE_SETTINGS":
    return {
      ...state,
      settingsIsOpen: !state.settingsIsOpen,
      
    };
    case "SET_SALESPOSITION":
    console.log(action)
    return {
      ...state, 
      selectedPosition: action.selectedPosition
    }
    default:
      return state;
  }
};
