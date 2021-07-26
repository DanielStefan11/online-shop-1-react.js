import { OPEN_MENU_DROPDOWN, CLOSE_MENU_DROPDOWN } from "../reduxConstants";

const initialState = {
   isDropdownOpen: false,
};

export const menuDropdownReducer = (state = initialState, action) => {
   switch (action.type) {
      case OPEN_MENU_DROPDOWN:
         return {
            ...state,
            isDropdownOpen: true,
         };
      case CLOSE_MENU_DROPDOWN:
         return {
            ...state,
            isDropdownOpen: false,
         };
      default:
         return state;
   }
};
