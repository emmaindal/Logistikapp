const initalState = {
  count: 0
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        count: action.count
      };
    default:
      return state;
  }
};
