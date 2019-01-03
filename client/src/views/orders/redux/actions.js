export const ordersAction = count => {
  return {
    type: "EXAMPLE_ACTION",
    count
  };
};

export const setOrders = orders => {
  return {
    type: "SET_ORDERS",
    orders
  }
}

export const setCompleted = order => {
  console.log(order)
  return {
    type: "SET_COMPLETED",
    order
  }
}