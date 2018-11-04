import React from "react";

import styled from "styled-components";
import { Grid, Divider, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, ListItemIcon, IconButton, ListItemSecondaryAction } from "@material-ui/core"
import { Settings } from "@material-ui/icons"

const Salesposition = ({ salespositions }) => {

  const renderSalespositions = salespositions.map(salesposition => {
    return (
      <Paper>
      <ListItem divider={true}>
        <ListItemText primary={salesposition} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <Settings />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
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
      <Grid item xs={8}>
        <List>
          {renderSalespositions}
        </List>
      </Grid>
    </Grid>
  );
};

export default Salesposition;

const StyledSettingsIcon = styled(Settings)`
      color: black;
`;
