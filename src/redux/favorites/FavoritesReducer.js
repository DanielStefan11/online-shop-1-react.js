import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../reduxConstants";

const initialState = {
   products: [],
};

export function favoritesReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_TO_FAVORITES:
         return {
            ...state,
            products: [...state.products, action.payload],
         };

      case REMOVE_FROM_FAVORITES:
         const filteredProducts = state.products.filter(product => product.id !== action.payload.id);
         return {
            ...state,
            products: filteredProducts,
         };

      default:
         return state;
   }
}
