import React from "react";
import styled from "styled-components";

import MenuCard from "./components/MenuCard";
import OrderModal from "./components/OrderModal";

import { Grid } from "@material-ui/core";

const categories = ["Dryck", "Mat", "Kaffe", "Snacks"];

const UserView = ({ isOpen, category, handleClickCategory, toggleModal }) => {
  return (
    <Container>
      <CardContainer>
        <Heading variant="title">Välj en kategori</Heading>
        <Grid container s={6} m={6} l={6} spacing={16}>
          {categories.map(item => (
            <MenuCard
              handleClickCategory={() => handleClickCategory(item)}
              key={item}
              item={item}
              cardIcon={`../../icons/${item.toLowerCase()}.svg`}
            />
          ))}
        </Grid>
      </CardContainer>
      <OrderModal
        category={category}
        toggleModal={toggleModal}
        isOpen={isOpen}
      />
    </Container>
  );
};

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 3px;
  color: rgb(71, 71, 71);
  text-align: center;
  @media (max-width: 700px) {
    margin-top: 15%;
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 5% 2% 0% 2%;
`;

const CardContainer = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default UserView;
