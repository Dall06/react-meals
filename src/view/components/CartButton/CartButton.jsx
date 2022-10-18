import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import MyModal from '../../common/MyModal/MyModal';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartList from '../CartList/CartList';

const CartButton = (props) => {
  const { checkout } = props;

  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckOut = (event) => {
    setOpen(false);
    checkout(event);
  };

  return (
    <>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handleOpen}>
        {state.quantity}
      </Button>
      {open && (
        <MyModal open={open} onClose={handleClose}>
          <CartList
            cart={state.cart}
            total={state.total}
            cartlen={state.quantity}
            onCheckout={handleCheckOut}
            onClose={handleClose}
          />
        </MyModal>
      )}
    </>
  );
};

CartButton.propTypes = {
  checkout: PropTypes.func
};

export default CartButton;
