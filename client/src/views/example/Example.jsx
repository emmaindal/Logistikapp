import React from "react";

import styled from "styled-components";

const Example = ({ exampleAction, count }) => {
  return (
    <div>
      <p>Simple Redux Example</p>
      <p>Number: {count}</p>
      <Button onClick={exampleAction}>Click here</Button>
    </div>
  );
};

export default Example;

const Button = styled.button`
  color: white;
  background-color: rgb(219, 132, 27);
`;
