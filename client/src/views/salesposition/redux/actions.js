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
}



export {toggleSettingsAction, setSelectedPositionAction};
