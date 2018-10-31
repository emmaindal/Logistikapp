const initalState = {
  showPassword: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "SHOW_PASSWORD":
      return {
        showPassword: !state.showPassword
      };
    default:
      return state;
  }
};
