import React from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  return (
    <CartContext.Provider value={{}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
