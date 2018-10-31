const toggleMenu = isOpen => {
  return {
    type: "TOGGLE_MENU",
    isOpen
  };
};

export default toggleMenu;
