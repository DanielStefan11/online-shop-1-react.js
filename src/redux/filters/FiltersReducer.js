import { TOGGLE_FILTERS_MENU } from "../reduxConstants";

const initialState = {
  filterShow: false,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTERS_MENU:
      return {
        ...state,
        filterShow: !state.filterShow,
      };

    default:
      return state;
  }
};
