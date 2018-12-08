import React from "react";
import styled from "styled-components";

import { 
  Grid, 
  Divider, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  ListItemSecondaryAction, 
  Button, 
  Typography 
} from "@material-ui/core"
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
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction,
  products,
  selectedMainProduct,
  selectedSecondProduct,
  addSalesposition,
  removeSalesposition }) => {

  const renderSalespositions = salespositions.map(saleposition => {
    return (
      <Paper key={saleposition.id}>
        <StyledListItem >
          <ListItemText primary={saleposition.name} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Settings" onClick={() => { toggleSettingsAction(); currentPositionAction(saleposition)}}>
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
        <StyledTypography variant="h3" align="center"> Säljpositioner </StyledTypography>
      </Grid>
      <Grid item xs={11} sm={8}>
        <Divider />
      </Grid>
      <Grid item xs={10} sm={7}>
        <List>
          {renderSalespositions}
        </List>

      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={() => { toggleNewPositionAction() }}>
          Lägg till ny position
        </Button>
      </Grid>
      <SettingsPanel
        isOpen={settingsIsOpen}
        toggleSettingsAction={toggleSettingsAction}
        selectedPosition={selectedPosition}
        updateSalespositionAction={updateSalespositionAction}
        removeSalesposition = {removeSalesposition}
        products={products}
        setMainProductAction={setMainProductAction}
        selectedMainProduct={selectedMainProduct}
        selectedSecondProduct = {selectedSecondProduct}
      />
      <NewPositionPanel
        isOpen={newPositionIsOpen}
        toggleNewPositionAction={toggleNewPositionAction}
        addSalespositionAction={addSalespositionAction}
        addSalesposition = {addSalesposition}
      />
    </Grid>
  );
};

export default Salesposition;

const StyledListItem = styled(ListItem)`
  margin: 10px;
`;

const StyledTypography = styled(Typography)`
  &&{margin: 20px;}
`
