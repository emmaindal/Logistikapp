import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import {
  toggleSettingsAction,
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction
} from "./redux/actions";
import { fetchSalespositions, fetchProducts,addSalesposition } from './redux/thunks'



class SalespositionContainer extends Component {

  async componentDidMount() {
    const { fetchSalespositions, fetchProducts} = this.props
    fetchSalespositions('http://localhost:3001/salespositions');
    fetchProducts('http://localhost:3001/products')    
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
      addSalesposition
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
          addSalesposition = {addSalesposition}
        />
      </div>
    )
  }
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
  removeSalespositionAction,
  setMainProductAction,
  fetchSalespositions,
  fetchProducts,
  addSalesposition

}



export default connect(
  mapStateToProps, mapDispatchToProps
)(SalespositionContainer);
