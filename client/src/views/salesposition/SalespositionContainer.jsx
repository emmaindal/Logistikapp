import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import { toggleSettingsAction, currentPositionAction, updateSalespositionAction, toggleNewPositionAction, addSalespositionAction } from "./redux/actions";

class SalespositionContainer extends Component {

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
