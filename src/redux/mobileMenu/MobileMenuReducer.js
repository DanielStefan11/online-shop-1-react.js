import { OPEN_MENU, CLOSE_MENU } from "../reduxConstants";

const initialState = {
   isOpen: false,
};

export const mobileMenuReducer = (state = initialState, action) => {
   switch (action.type) {
      case OPEN_MENU:
         return {
            ...state,
            isOpen: true,
         };

      case CLOSE_MENU:
         return {
            ...state,
            isOpen: false,
         };

      default:
         return initialState;
   }
};
