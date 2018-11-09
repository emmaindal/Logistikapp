import React from "react";
import styled from "styled-components";

import MenuCard from "./components/MenuCard";
import { Grid, Typography } from "@material-ui/core";

const categories = ["Dryck", "Mat", "Kaffe", "Snacks"];

const UserView = ({ handleClickCategory }) => {
  return (
    <Container>
      <Heading variant="title">Välj en kategori</Heading>
      <Grid container s={12} m={6} l={6} spacing={16}>
        {categories.map(item => (
          <MenuCard
            handleClickCategory={() => handleClickCategory(item)}
            key={item}
            cardIcon={item}
          />
        ))}
      </Grid>
    </Container>
  );
};

const Heading = styled.h2`
  color: rgb(71, 71, 71);
  font-family: "Lato", "sans-serif";
  text-align: center;
`;

const Container = styled.div`
  margin: 8% 5% 0% 5%;
`;
export default UserView;
