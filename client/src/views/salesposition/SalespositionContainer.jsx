import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import { toggleSettingsAction, currentPositionAction, updateSalespositionAction } from "./redux/actions";

class SalespositionContainer extends Component {

  render() {
    const {
      salespositions,
      toggleSettingsAction,
      settingsIsOpen,
      currentPositionAction,
      selectedPosition,
      updateSalespositionAction } = this.props;

    return (
      <div>
        <Salesposition
          salespositions={salespositions}
          isOpen={settingsIsOpen}
          selectedPosition={selectedPosition}
          updateSalespositionAction={updateSalespositionAction}
          currentPositionAction={currentPositionAction}
          toggleSettingsAction={toggleSettingsAction}
        />;
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    salespositions: state.salesposition.salespositions,
    settingsIsOpen: state.salesposition.settingsIsOpen,
    selectedPosition: state.salesposition.selectedPosition
  };
};

export default connect(
  mapStateToProps,
  {
    toggleSettingsAction,
    currentPositionAction,
    updateSalespositionAction
  }

)(SalespositionContainer);
