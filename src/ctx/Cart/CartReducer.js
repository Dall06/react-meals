import React from "react";

function CartReducer(state, action) {
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

export default CartReducer;
