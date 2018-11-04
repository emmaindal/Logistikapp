import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";
import salespositionAction from "./redux/actions";

class SalespositionContainer extends Component {

  handleClickSettings = saleposition => () => {
    //Popup with settings for that specific sales position
    console.log(saleposition);
    
  }
  render() {
    const { salespositions, salespositionAction } = this.props;
    return <Salesposition salespositions={salespositions} salespositionsAction={salespositionAction} handleClickSettings={this.handleClickSettings} />;
  }
}

const mapStateToProps = state => {
  return { salespositions: state.salesposition.salespositions};
};

export default connect(
  mapStateToProps,
  { salespositionAction }
)(SalespositionContainer);
