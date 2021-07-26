import { OPEN_MENU_DROPDOWN, CLOSE_MENU_DROPDOWN } from "../reduxConstants";

export const openMenuDropdown = () => {
   return {
      type: OPEN_MENU_DROPDOWN,
   };
};

export const closeMenuDropdown = () => {
   return {
      type: CLOSE_MENU_DROPDOWN,
   };
};
