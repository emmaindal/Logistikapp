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


} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

const Orders = ({ ordersAction, count, orders }) => {


  const renderOrders = orders.map(order => {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <StyledExpansionMaintext style={{
            flexBasis: '33.33%',
            flexShrink: 0,
          }}>
            {order}
          </StyledExpansionMaintext>
          <StyledExpansionSecondary > - 22.03</StyledExpansionSecondary>
        </ExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
            </Typography>
        </StyledExpansionPanelDetails>
        <Divider></Divider>
        <StyledExpansionPanelActions>
          <Button size="small">
            DONE
          </Button>
        </StyledExpansionPanelActions>
      </ExpansionPanel>
    )
  })


  return (
    <Grid
      container
      spacing={0}
      justify="center"
    >
      <Grid item xs={12}>
        <StyledTypographyHeadline variant="h3" align="center"> Beställningar </StyledTypographyHeadline>
      </Grid>
      <Grid item xs={11} sm={8}>
        <Divider />
      </Grid>
      <Grid item xs={10} sm={7}>
        <div style={{ margin: '30px' }}>
          {renderOrders}
        </div>


      </Grid>
    </Grid>
  );
};

export default Orders;



const StyledTypographyHeadline = styled(Typography)`
  &&{margin: 20px;}
`

const StyledExpansionMaintext = styled(Typography)`
  &&{font-size: 1.2rem;}
`

const StyledExpansionSecondary = styled(Typography)`
  &&{font-size: 1rem;
  }
`

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  &&{background-color: #eee;
  }
`

const StyledExpansionPanelActions = styled(ExpansionPanelActions)`
  &&{
    background-color: #eee;
  }
`