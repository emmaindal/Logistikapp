function toggleSettingsAction(settingsIsOpen) {
  return {
    type: "TOGGLE_SETTINGS",
    settingsIsOpen
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


export {toggleSettingsAction, currentPositionAction, updateSalespositionAction};
