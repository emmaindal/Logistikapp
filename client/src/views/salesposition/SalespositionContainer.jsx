import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import {
  toggleSettingsAction,
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  setInitialState,
  removeSalespositionAction
} from "./redux/actions";

class SalespositionContainer extends Component {

  async componentDidMount() {
    let jsonRes = await fetchAll();
    this.props.setInitialState(jsonRes)
  }

  render() {
    const {
      salespositions,
      toggleSettingsAction,
      settingsIsOpen,
      currentPositionAction,
      selectedPosition,
      updateSalespositionAction,
      newPositionIsOpen,
      toggleNewPositionAction,
      addSalespositionAction,
      setInitialState,
      removeSalespositionAction } = this.props;
    return (

      <div>
        <Salesposition
          salespositions={salespositions}
          settingsIsOpen={settingsIsOpen}
          selectedPosition={selectedPosition}
          updateSalespositionAction={updateSalespositionAction}
          currentPositionAction={currentPositionAction}
          toggleSettingsAction={toggleSettingsAction}
          toggleNewPositionAction={toggleNewPositionAction}
          newPositionIsOpen={newPositionIsOpen}
          addSalespositionAction={addSalespositionAction}
          removeSalespositionAction={removeSalespositionAction}
        />
      </div>
    )
  }
}

async function fetchAll() {
  let url = "http://localhost:3001/salespositions"
  let response = await fetch(url)
  let json = await response.json()
  return json
}



const mapStateToProps = state => {
  return {
    salespositions: state.salesposition.salespositions,
    settingsIsOpen: state.salesposition.settingsIsOpen,
    newPositionIsOpen: state.salesposition.newPositionIsOpen,
    selectedPosition: state.salesposition.selectedPosition
  };
};

const mapDispatchToProps = {
  toggleSettingsAction,
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  setInitialState,
  removeSalespositionAction
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(SalespositionContainer);
