import React from "react";

import styled from "styled-components";
import { Grid, Divider, Paper, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core"
import { Settings } from "@material-ui/icons"

const Salesposition = ({ salespositions, handleClickSettings }) => {

  const renderSalespositions = salespositions.map(saleposition => {
    return (
      <Paper key={saleposition}>
      <StyledListItem >
        <ListItemText primary={saleposition} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Settings" onClick={handleClickSettings(saleposition)}>
            <Settings />
          </IconButton>
        </ListItemSecondaryAction>
      </StyledListItem>
      </Paper>
    )
  })


  return (
    <Grid
      container
      spacing={0}
      justify="center"
    >
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}> Säljpositioner </h1>
      </Grid>
      <Divider />
      <Grid item xs={10}>
        <List>
          {renderSalespositions}
        </List>
      </Grid>
    </Grid>
  );
};

export default Salesposition;

const StyledListItem = styled(ListItem)`
  margin: 10px;
`;
