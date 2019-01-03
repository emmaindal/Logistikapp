import React from "react";
import styled from "styled-components";


import {
  Grid,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"


const Orders = ({orders, onCompletedClick }) => {
  const renderOrders = orders.map(order => {
    return (
      <StyledExpansionPanel key={order.time} style={order.completed ? { background: "#24ed00" } : { background: "#d90000" }}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />} >
          <StyledExpansionMaintext>
            {order.salesposition}
          </StyledExpansionMaintext>
          <StyledExpansionSecondary > 
            tid: {order.time} 
          </StyledExpansionSecondary>
        </ExpansionPanelSummary>

        <StyledExpansionPanelDetails>
          <List style={{width: '80%', display: 'inline-block'}}>
            <ListItem >
              <ListItemText >
                <b>Produkt</b>
              </ListItemText>
              <ListItemSecondaryAction >
                <Typography>
                  <b>Antal</b>
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            
            {Object.keys(order.order).map(item => {
              return (
                <ListItem key={item} divider>
                  <ListItemText>
                    {item}
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <Typography>
                      {order.order[item]}
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                )
              })
            }

        </List>
        </StyledExpansionPanelDetails>

        <Divider/>
        <StyledExpansionPanelActions>
          <Button size="small" onClick={() => onCompletedClick(order, order.completed ? false : true)}>
            {order.completed ? 'Ta bort färdigmarkering' : 'Markera som färdig'}
          </Button>
        </StyledExpansionPanelActions>
      </StyledExpansionPanel>
    )
  })

  return (
  <Grid
    container
    spacing={0}
    justify="center"
  >
    <Grid item xs={12}>
      <StyledTypographyHeadline variant="h3" align="center"> 
        Beställningar 
      </StyledTypographyHeadline>
    </Grid>
    <Grid item xs={11} sm={8}>
      <Divider />
    </Grid>
    <Grid item xs={12} sm={7}>
      <div style={{ margin: '30px' }}>
        {renderOrders}
      </div>
    </Grid>
  </Grid>
  );
};
        
export default Orders;
       
const StyledTypographyHeadline = styled(Typography)`
  &&{
      margin: 20px;
    }
`
        
const StyledExpansionMaintext = styled(Typography)`
  &&{
    flex-basis: 50%;
    flex-shrink: 0;
    font-size: 1.2rem;
    }
`
        
const StyledExpansionSecondary = styled(Typography)`
  &&{
      font-size: 1rem;
      vertical-align: middle;
      margin: auto;
    }
 `
        
const StyledExpansionPanel = styled(ExpansionPanel)`
  &&{
      margin: 20px;
    }
`
        
const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  &&{
    display: block;
     background-color: #eee;
     text-align: center;
     vertical-align: middle;
    }
`
        
const StyledExpansionPanelActions = styled(ExpansionPanelActions)`
  &&{
      background-color: #eee;
    }
`