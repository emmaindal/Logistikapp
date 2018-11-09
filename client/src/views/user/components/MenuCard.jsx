import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const MenuCard = ({ cardIcon, handleClickCategory }) => {
  return (
    <Grid onClick={handleClickCategory} item xs={6}>
      <Card>{cardIcon}</Card>
    </Grid>
  );
};

const Card = styled.div`
  color: white;
  background-color: rgba(53, 99, 236, 0.95);
  padding: 10%;
  height: 120px;
  box-shadow: 2px 2px 15px rgba(152, 152, 152, 0.37);
  border-radius: 2px;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    background-color: rgba(5, 32, 107, 0.76);
  }
`;

export default MenuCard;
