import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";
import toggleSettingsAction from "./redux/actions";
import SettingsPanel from "./components/Settings";


class SalespositionContainer extends Component {

  handleClickSettings = saleposition => () => {
    //Popup with settings for that specific sales position
    console.log(saleposition);

  }
  render() {
    const { salespositions, toggleSettingsAction, settingsIsOpen } = this.props;
    console.log(settingsIsOpen)
    return <div>
      <Salesposition
        salespositions={salespositions}
        toggleSettings={toggleSettingsAction}
        isOpen={settingsIsOpen}
        handleClickSettings={this.handleClickSettings}
      />;
    <SettingsPanel isOpen={settingsIsOpen} toggleSettingsAction={toggleSettingsAction} />;
    </div>
  }
}

const mapStateToProps = state => {
  return {
    salespositions: state.salesposition.salespositions,
    settingsIsOpen: state.salesposition.settingsIsOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleSettingsAction }
)(SalespositionContainer);
