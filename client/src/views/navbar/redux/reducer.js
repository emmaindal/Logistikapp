const initalState = {
  isOpen: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
