import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import reducer from './CartReducer';
import initialState from './States';

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{props.children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.any
};

export default CartContextProvider;
