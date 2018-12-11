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
  console.log(salesposition)
  return {
    type: "ADD_SALESPOSITION",
    salesposition,
  }
}

const setProductCategory = category => {
  return {
    type: "SET_CATEGORY",
    category
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

const updateSalespositionProductAction = (mainCat, mainProduct, secondProduct) => {
  console.log('newproductaction', mainCat, mainProduct, secondProduct);
  return {
    type: "SET_NEWPRODUCTS",
    mainCat,
    mainProduct,
    secondProduct
  }
}

const removeProductAction = (category, product ,targetId) => {
  console.log(targetId)
  console.log(category.value)
  
  return {
    type: "REMOVE_PRODUCT",
    targetId,
    category: category.value,
    product: product.value
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
  setProductCategory,
  setMainProductAction,
  setSecondProductAction,
  updateSalespositionProductAction,
  removeProductAction,
  saveSalespositionAction,
};
