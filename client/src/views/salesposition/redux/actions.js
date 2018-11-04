const toggleSettingsAction = settingsIsOpen => {
  return {
    type: "TOGGLE_SETTINGS",
    settingsIsOpen
  };
};



export default toggleSettingsAction;
