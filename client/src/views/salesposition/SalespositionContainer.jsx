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
  removeSalespositionAction,
  setMainProductAction
} from "./redux/actions";

class SalespositionContainer extends Component {

  async componentDidMount() {
    let salespositionsRes = await fetchAll('salespositions');
    let productsRes = await fetchAll('products')
    this.props.setInitialState(salespositionsRes, productsRes)
    
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
      setMainProductAction,
      removeSalespositionAction,
      products, 
      selectedMainProduct,
      selectedSecondProduct,
    } = this.props;
    return (

      <div>
        <Salesposition
          salespositions={salespositions}
          settingsIsOpen={settingsIsOpen}
          selectedPosition={selectedPosition}
          newPositionIsOpen={newPositionIsOpen}
          products={products}
          currentPositionAction={currentPositionAction}
          toggleSettingsAction={toggleSettingsAction}
          toggleNewPositionAction={toggleNewPositionAction}
          addSalespositionAction={addSalespositionAction}
          removeSalespositionAction={removeSalespositionAction}
          updateSalespositionAction={updateSalespositionAction}
          setMainProductAction = {setMainProductAction}
          selectedMainProduct = {selectedMainProduct}
          selectedSecondProduct = {selectedSecondProduct}
        />
      </div>
    )
  }
}

async function fetchAll(endpoint) {
  let baseUrl = "http://localhost:3001/"
  let url = baseUrl + endpoint
  let response = await fetch(url)
  let json = await response.json()
  return json
}



const mapStateToProps = state => {
  // TODO: PRODUCTS KANSKE INTE MÅSTE TAS I STATE HÄR UTAN FRÅN NGT ANNAT STATE?
  return {
    salespositions: state.salesposition.salespositions,
    settingsIsOpen: state.salesposition.settingsIsOpen,
    newPositionIsOpen: state.salesposition.newPositionIsOpen,
    selectedPosition: state.salesposition.selectedPosition,
    products: state.salesposition.products,
    selectedMainProduct: state.salesposition.selectedMainProduct,
    selectedSecondProduct: state.salesposition.selectedSecondProduct
  };
};

const mapDispatchToProps = {
  toggleSettingsAction,
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  setInitialState,
  removeSalespositionAction,
  setMainProductAction

}



export default connect(
  mapStateToProps, mapDispatchToProps
)(SalespositionContainer);
