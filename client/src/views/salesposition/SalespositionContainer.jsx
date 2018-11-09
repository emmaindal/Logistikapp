import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import { toggleSettingsAction, currentPositionAction, updateSalespositionAction, toggleNewPositionAction, addSalespositionAction } from "./redux/actions";

class SalespositionContainer extends Component {

  // async componentDidMount(){
  //   console.log(this.props.store)
  //   let q = await fetchAll();
  //   addSalespositionAction(q)
  //   // Här körs den i min action men aldrig i min reducer. 
  // }

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

const mapStateToProps = state => {
  return {
    salespositions: state.salesposition.salespositions,
    settingsIsOpen: state.salesposition.settingsIsOpen,
    newPositionIsOpen: state.salesposition.newPositionIsOpen,
    selectedPosition: state.salesposition.selectedPosition
  };
};

async function fetchAll(){
  let url = "http://localhost:3001/salespositions"
    let response = await fetch(url)
    let json = await response.json()
    return json
}

export default connect(
  mapStateToProps,
  {
    toggleSettingsAction,
    currentPositionAction,
    updateSalespositionAction,
    toggleNewPositionAction,
    addSalespositionAction
  }

)(SalespositionContainer);
