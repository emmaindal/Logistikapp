function toggleSettingsAction() {
  return {
    type: "TOGGLE_SETTINGS",
    
  };
};

function currentPositionAction(saleposition) {
  console.log(saleposition);
  
  return {
    type: "SELECTED_SALESPOSITION",
    selectedPosition : saleposition
  }
};

function updateSalespositionAction(selectedPosition, newName){
  console.log(selectedPosition);
  
    return {
      type: "UPDATE_SALESPOSITION",
      selectedPosition: selectedPosition,
      newName: newName,
  }
};

function toggleNewPositionAction(){  
  return {
    type: "TOGGLE_NEWPOSITION"
  }
}

function addSalespositionAction(newPositionName){

  let data = {name: newPositionName}
  let q = APICall('POST', 'salespositions', data)

  return {
    type: "ADD_SALESPOSITION",
    newPositionName: newPositionName
  }
}

function setInitialState(initialSalespositions) {
  console.log(initialSalespositions)
  return {
    type: 'INITIAL_STATE',
    initialSalespositions
  }
}

function APICall(method, endpoint, data){
  const baseURL = "http://localhost:3001/"
  let url = baseURL + endpoint
  console.log('url', url)

  fetch(url, {
    headers: {'content-type': 'application/json'},
    method,
    body: JSON.stringify(data),
  }).then(response => console.log(response))
}

export {
  toggleSettingsAction, 
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction,
  setInitialState};
