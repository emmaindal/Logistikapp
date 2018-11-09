import React from "react";
import styled from "styled-components";
import { Grid, Card, Tooltip } from "@material-ui/core";

const MenuCard = ({ item, cardIcon, handleClickCategory }) => {
  return (
    <Grid onClick={handleClickCategory} item xs={6}>
      <StyledCard>
        <Tooltip title={item} placement="top-start">
          <Img src={cardIcon} alt="noun project icon" />
        </Tooltip>
      </StyledCard>
    </Grid>
  );
};

const Img = styled.img`
  margin: 15% 2% 2% 2%;
  height: 160%;
`;
const StyledCard = styled(Card)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    color: white;
    background-color: rgba(53, 99, 236, 0.87);
    padding: 10%;
    box-shadow: 2px 2px 25px 4px rgba(167, 165, 165, 0.49);
    border-radius: 2px;
    transition: 0.3s;

    &:hover {
      opacity: 1;
      background-color: rgba(233, 233, 233, 0.79);
      transition: 1s ease;
    }
  }
`;

export default MenuCard;
