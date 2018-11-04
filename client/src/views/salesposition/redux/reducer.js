const initalState = {
  salespositions: ['Huvudbar', 'E22', 'Träsk', 'Mamas', 'VIP', 'Staropramen', 'Sweden', 'Rockklassiker', 'Vinkeln'],
  settingsIsOpen: false
  
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "TOGGLE_SETTINGS":
    return {
      settingsIsOpen: !state.settingsIsOpen,
      salespositions: state.salespositions
    };
    default:
      return state;
  }
};
