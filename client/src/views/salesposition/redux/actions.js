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
  console.log(saleposition);
  
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

  // new product
  let productName = secondProduct ? secondProduct : undefined;
  let productValues = secondProduct ? allProducts[0][mainProduct][secondProduct] : undefined;
  let allProd = selectedPosition.products ? selectedPosition.products[productName] = productValues : selectedPosition.products = {};
  
  // new name
  let name = newName ? newName : selectedPosition.name
  
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

function setMainProductAction(mainproduct, secondProduct) {
  console.log('mainproduct', mainproduct)
  console.log('secondProduct', secondProduct)
  if(mainproduct){
    return {
      type: "SET_MAINPRODUCT",
      selectedProduct: mainproduct
    }
  }
  if(secondProduct){
    return {
      type: "SET_SECONDPRODUCT",
      selectedProduct: secondProduct
    }
  }

}




//////

function setInitialState(initialSalespositions, productsRes) {
  return {
    type: 'INITIAL_STATE',
    initialSalespositions,
    productsRes
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
  setInitialState,
  setMainProductAction};
