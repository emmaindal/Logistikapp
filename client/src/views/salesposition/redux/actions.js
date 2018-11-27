function toggleSettingsAction() {
  return {
    type: "TOGGLE_SETTINGS",
    
  };
};

function toggleNewPositionAction(){  
  return {
    type: "TOGGLE_NEWPOSITION"
  }
}

function currentPositionAction(saleposition) {  
  return {
    type: "SELECTED_SALESPOSITION",
    selectedPosition : saleposition
  }
};

///////

function addSalespositionAction(newPositionName){
  // SET TO JSON SERVER
  let data = {name: newPositionName, products: {}}
  APICall('POST', 'salespositions', data)
  return {
    type: "ADD_SALESPOSITION",
    newPositionName: newPositionName,
  }
}

function updateSalespositionAction(selectedPosition, newName, mainProduct, secondProduct, allProducts){  
  // new product name and values 
  // Controlls if these are changed, otherwise ignore
  if(secondProduct && mainProduct){
    let productName = secondProduct  
    let productValues = allProducts[0][mainProduct][secondProduct]
    selectedPosition.products[productName] = productValues
  }
  
  // Sets the new name if changed
  let name = newName ? newName : selectedPosition.name
  
  // Data obj for JSON server
  let data = {
    name, 
    products : selectedPosition.products
  }

  APICall('PUT', `salespositions/${selectedPosition.id}`, data)

    return {
      type: "UPDATE_SALESPOSITION",
      selectedPosition,
      name,
  }
};

function removeSalespositionAction(selectedPosition){
  // REMOVE FROM JSON SERVER
  APICall('DELETE', `salespositions/${selectedPosition.id}`)
    return {
      type: "REMOVE_SALESPOSITION",
      selectedPosition: selectedPosition,
  }
};

function setMainProductAction(mainproduct = undefined, secondProduct = undefined, removeProduct = undefined, selectedPosition) {
  // Very dynamic function.
  // Changes depending on input.

  // Sets mainproduct
  if(mainproduct){
    return {
      type: "SET_MAINPRODUCT",
      selectedProduct: mainproduct
    }
  }
  // sets secondproduct
  if(secondProduct){
    return {
      type: "SET_SECONDPRODUCT",
      selectedProduct: secondProduct
    }
  }
  // removes product
  if(removeProduct){
    // Dataobject for JSON server
    let updatedSelectedPosition = selectedPosition
    delete updatedSelectedPosition.products[removeProduct]
    let data = {
      name: selectedPosition.name,
      products: updatedSelectedPosition.products
    }
    // UPDATE JSON SERVER
    APICall('PUT', `salespositions/${selectedPosition.id}`, data)
    
    return {
      type: "REMOVE_PRODUCT",
      removeProduct,
      selectedPosition
    }
  }

}






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




/*
* JSON SERVER CALL 
*/
async function APICall(method, endpoint, data){
  const baseURL = "http://localhost:3001/"
  let url = baseURL + endpoint
  let response = await fetch(url, {
    headers: {'content-type': 'application/json'},
    method,
    body: JSON.stringify(data),
  })

  let responseData = await response.json()
  return responseData
}


export {
  toggleSettingsAction, 
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  removeSalespositionAction,
  setMainProductAction};
