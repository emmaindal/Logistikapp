import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";
import {toggleSettingsAction, setSelectedPositionAction} from "./redux/actions";

class SalespositionContainer extends Component {

  handleClickSettings = (saleposition) => {
    //Popup with settings for that specific sales position
    console.log(saleposition);
  }


  render() {
    const { salespositions, toggleSettingsAction, settingsIsOpen, setSelectedPositionAction, selectedPosition} = this.props;
    return <div>
      <Salesposition
        salespositions={salespositions}
        toggleSettings={toggleSettingsAction}
        isOpen={settingsIsOpen}
        handleClickSettings={this.handleClickSettings}
        setSelectedPosition = {setSelectedPositionAction}
        selectedPosition = {selectedPosition}
      />;
    
    </div>
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
  { toggleSettingsAction, setSelectedPositionAction}
  
)(SalespositionContainer);
