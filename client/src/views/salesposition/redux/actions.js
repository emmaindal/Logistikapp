function toggleSettingsAction(settingsIsOpen) {
  return {
    type: "TOGGLE_SETTINGS",
    settingsIsOpen
  };
};

function setSelectedPositionAction(saleposition) {
  console.log(saleposition);
  
  return {
    type: "SET_SALESPOSITION",
    selectedPosition : saleposition
  }
};

function updateSalesposition(selectedPosition, newName){
    console.log()
    return {
      type: "UPDATE_SALESPOSITION",
      selectedPosition: selectedPosition,
      newName: newName,
  }
};


export {toggleSettingsAction, setSelectedPositionAction, updateSalesposition};
