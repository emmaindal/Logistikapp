import { LinearProgress } from "@material-ui/core";

const initalState = {
  salespositions: ['Huvudbar', 'E22', 'Träsk', 'Mamas', 'VIP', 'Staropramen', 'Sweden', 'Rockklassiker', 'Vinkeln'],
  settingsIsOpen: false,
  selectedPosition : ''
  
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "TOGGLE_SETTINGS":
    return {
      ...state,
      settingsIsOpen: !state.settingsIsOpen,
      
    };
    case "SET_SALESPOSITION":
    return {
      ...state, 
      selectedPosition: action.selectedPosition
    }
    case "UPDATE_SALESPOSITION":
    let i = state.salespositions.indexOf(action.selectedPosition)
    let newList = state.salespositions
    newList[i] = action.newName
    return {
      ...state,
      salespositions: newList,
      settingsIsOpen: !state.settingsIsOpen
    }
    default:
      return state;
  }
};
