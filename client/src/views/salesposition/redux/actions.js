const toggleSettingsAction = () => {
  return {
    type: "TOGGLE_SETTINGS",
    
  };
};

const toggleNewPositionAction = () => {  
  return {
    type: "TOGGLE_NEWPOSITION"
  }
}

const currentPositionAction =  saleposition => {  
  return {
    type: "SELECTED_SALESPOSITION",
    selectedPosition : saleposition
  }
};

const addSalespositionAction = salesposition => {
  return {
    type: "ADD_SALESPOSITION",
    salesposition,
  }
}

const setMainProductAction = mainProduct => {
  console.log(mainProduct)
  return {
    type: "SET_MAINPRODUCT",
    mainProduct
  }
}

const setSecondProductAction = secondProduct => {
  console.log(secondProduct)
  return {
    type: "SET_SECONDPRODUCT",
    secondProduct
  }
}

const updateSalespositionProductAction = (mainProduct, secondProduct) => {
  console.log('newproductaction', mainProduct, secondProduct);
  return {
    type: "SET_NEWPRODUCTS",
    mainProduct,
    secondProduct
  }
}

const removeProductAction = targetId => {
  console.log(targetId)
  return {
    type: "REMOVE_PRODUCT",
    targetId
  }
}

const saveSalespositionAction = (selectedPosition) => {  
  return {
    type: "SAVE_SALESPOSITION",
    selectedPosition
  }
}

const removeSalespositionAction = selectedPosition =>{
    return {
      type: "REMOVE_SALESPOSITION",
      selectedPosition: selectedPosition,
  }
};


export const updateSalespositions = salespositions => {
  return {
    type: 'UPDATE_SALESPOSITIONS',
    salespositions
  }
}

export const updateProducts = products => {
  return {
    type: 'UPDATE_PRODUCTS',
    products
  }
}


export {
  toggleSettingsAction, 
  currentPositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction,
  setSecondProductAction,
  updateSalespositionProductAction,
  removeProductAction,
  saveSalespositionAction,
};
