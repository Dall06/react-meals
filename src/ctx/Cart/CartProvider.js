import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addHandler = (meal) => {
    setCart([...cart, meal]);
  };

  const updateHandler = (id, qty) => {
    if (qty === 0) {
      const copy = Array.from(cart);

      const result = copy.findIndex((obj) => obj.id === id);
      copy.splice(result, 1);
      setCart(copy);
    }

    const result = cart.map(m => (m.id === id ? {...m, qty: qty} : m))
    setCart(result);
  };

  const removeHandler = (id, qty) => {
    const copy = Array.from(cart);

    const result = copy.findIndex((obj) => obj.id === id);
    copy.splice(result, 1);
    setCart(copy);
  };

  return (
    <CartContext.Provider
      value={{
        meals: meals,
        onAdd: addHandler,
        onRemove: removeHandler,
        onUpdate: updateHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
