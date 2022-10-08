import { useReducer } from "react";
import CartContext from "./CartContext";
import reducer from "./CartReducer"
import initialState from "./States"

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
