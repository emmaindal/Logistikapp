import React, { Component } from "react";
import { connect } from "react-redux";

import Salesposition from "./Salesposition";

import {
  toggleSettingsAction,
  currentPositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction,
  setSecondProductAction,
  updateSalespositionProductAction,
  removeProductAction
} from "./redux/actions";
import { fetchSalespositions, fetchProducts,addSalesposition, removeSalesposition, updateSalesposition} from './redux/thunks'



class SalespositionContainer extends Component {

  async componentDidMount(url) {
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
      updateSalesposition,
      newPositionIsOpen,
      toggleNewPositionAction,
      addSalespositionAction,
      setMainProductAction,
      setSecondProductAction,
      updateSalespositionProductAction,
      removeSalespositionAction,
      products, 
      selectedMainProduct,
      selectedSecondProduct,
      addSalesposition,
      removeSalesposition,
      removeProductAction
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
          updateSalesposition={updateSalesposition}
          setMainProductAction = {setMainProductAction}
          selectedMainProduct = {selectedMainProduct}
          selectedSecondProduct = {selectedSecondProduct}
          addSalesposition = {addSalesposition}
          removeSalesposition = {removeSalesposition}
          setSecondProductAction = {setSecondProductAction}
          updateSalespositionProductAction = {updateSalespositionProductAction}
          removeProductAction = {removeProductAction}
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
  updateSalesposition,
  toggleNewPositionAction,
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction,
  setSecondProductAction,
  fetchSalespositions,
  fetchProducts,
  addSalesposition,
  removeSalesposition,
  updateSalespositionProductAction,
  removeProductAction
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(SalespositionContainer);
