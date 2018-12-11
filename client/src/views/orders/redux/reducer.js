const initalState = {
  count: 0
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};
