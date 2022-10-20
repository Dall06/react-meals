import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Modal from '../../layout/Modal/Modal';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartList from '../CartList/CartList';
import { useNavigate } from 'react-router-dom';

const cart = () => {
  const navigate = useNavigate();

  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckOut = (event) => {
    event.preventDefault();
    setOpen(false);
    navigate('/react-meals/checkout');
  };

  return (
    <>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handleOpen}>
        {state.quantity}
      </Button>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <CartList
            cart={state.cart}
            total={state.total}
            quantity={state.quantity}
            onCheckout={handleCheckOut}
            onClose={handleClose}
          />
        </Modal>
      )}
    </>
  );
};

export default cart;
