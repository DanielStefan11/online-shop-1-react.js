import { ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER } from "../reduxConstants";

export function addToCart(payload) {
   return {
      type: ADD_TO_CART,
      payload,
   };
}

export function removeFromCart(payload) {
   return {
      type: REMOVE_FROM_CART,
      payload,
   };
}

export const placeOrder = () => {
   return {
      type: PLACE_ORDER,
   };
};
