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
  let data = {name: newPositionName}
  APICall('POST', 'salespositions', data)
  return {
    type: "ADD_SALESPOSITION",
    newPositionName: newPositionName
  }
}

function updateSalespositionAction(selectedPosition, newName){
  // SET TO JSON SERVER
  let data = {name: newName}
  APICall('PUT', `salespositions/${selectedPosition.id}`, data)
  
    return {
      type: "UPDATE_SALESPOSITION",
      selectedPosition: selectedPosition,
      newName: newName,
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


//////

function setInitialState(initialSalespositions) {
  return {
    type: 'INITIAL_STATE',
    initialSalespositions
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
  setInitialState};
