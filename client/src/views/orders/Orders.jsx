import React from "react";

import styled from "styled-components";

const Orders = ({ ordersAction, count }) => {
  return (
    <div>
      <p>Simple Redux Example</p>
      <p>Number: {count}</p>
      <Button onClick={ordersAction}>Click here</Button>
    </div>
  );
};

export default Orders;

const Button = styled.button`
  color: white;
  background-color: rgb(219, 132, 27);
`;
