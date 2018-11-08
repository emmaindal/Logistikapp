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

function addSalespositionAction(newPosition){
  console.log(newPosition)
  return {
    type: "ADD_SALESPOSITION",
    newPosition
  }
}


export {
  toggleSettingsAction, 
  currentPositionAction,
  updateSalespositionAction,
  toggleNewPositionAction,
  addSalespositionAction};
