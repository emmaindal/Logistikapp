import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import {
  toggleSettingsAction,
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  setInitialState
} from "./redux/actions";

class SalespositionContainer extends Component {

  async componentDidMount() {

    let q = await this.newPosition('test');
    await console.log(q);
    let jsonRes = await fetchAll();
    this.props.setInitialState(jsonRes)
  }

  async newPosition(newPosition) {
    console.log(newPosition);
    fetch('http://localhost:3001/salespositions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 4,
        name: 'test',
      })
    }).then(response => {console.log(response)})
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
      addSalespositionAction } = this.props;
    console.log(salespositions)
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
  setInitialState
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(SalespositionContainer);
