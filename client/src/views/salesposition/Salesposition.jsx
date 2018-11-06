import React from "react";

import styled from "styled-components";
import { Grid, Divider, Paper, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Button } from "@material-ui/core"
import { Settings } from "@material-ui/icons"
import SettingsPanel from "./components/Settings";
import NewPositionPanel from "./components/NewSalesposition";


const Salesposition = ({
  salespositions,
  toggleSettingsAction,
  settingsIsOpen,
  currentPositionAction,
  selectedPosition,
  updateSalespositionAction,
  toggleNewPositionAction,
  newPositionIsOpen,
  addSalespositionAction }) => {

  const renderSalespositions = salespositions.map(saleposition => {
    return (
      <Paper key={saleposition}>
        <StyledListItem >
          <ListItemText primary={saleposition} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Settings" onClick={() => { toggleSettingsAction(); currentPositionAction(saleposition) }}>
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
      <Grid item xs={10} >
        <Button variant="contained" onClick={() => { toggleNewPositionAction() }}>
          Lägg till ny position
        </Button>
      </Grid>
      <SettingsPanel
        isOpen={settingsIsOpen}
        toggleSettingsAction={toggleSettingsAction}
        selectedPosition={selectedPosition}
        updateSalespositionAction={updateSalespositionAction} />
      <NewPositionPanel
        isOpen={newPositionIsOpen}
        toggleNewPositionAction={toggleNewPositionAction}
        addSalespositionAction={addSalespositionAction}
      />
    </Grid>
  );
};

export default Salesposition;

const StyledListItem = styled(ListItem)`
  margin: 10px;
`;
