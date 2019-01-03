const initalState = {
  count: 0,
  orders: [],

};

export default (state = initalState, action) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        count: state.count + 1
      };
    
    case "SET_ORDERS":
      return {
        orders : action.orders
      }
    
    case "SET_COMPLETED":
      return {
        ...state,
        orders: [
          ...state.orders
        ]
      }
    default:
      return state;
  }
};
