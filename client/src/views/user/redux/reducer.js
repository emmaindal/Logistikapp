const initalState = {
  category: ""
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        category: action.category
      };
    default:
      return state;
  }
};
