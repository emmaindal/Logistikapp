const initalState = {
  salespositions: ['Huvudbar', 'E22', 'Träsk']
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "GET_SALESPOSITIONS":
      return {
        salespositions: state.salespositions
      };
    default:
      return state;
  }
};
