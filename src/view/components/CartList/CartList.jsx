import React, { useContext, useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import OrderModal from "../../resources/Modal/OrderModal";
import CartContext from "../../context/CartContext/CartContext";

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

  const handleSetTotal = () => {
    const sum = state.cart.reduce((s, m) => s + (m.price * m.quantity), 0);
    setTotal(sum);
  };

  const handleSetQty = () => {
    const sum = state.cart.reduce((s, m) => s + m.quantity, 0);
    console.log(sum);
    setQty(sum);
  };

  useEffect(() => {
    handleSetTotal();
    handleSetQty();
  });

  const { state } = useContext(CartContext);

  return (
    <>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handleOpen}>
        {qty}
      </Button>
      {
        open && (
          <OrderModal open={open} onClose={handleClose} cart={state.cart} total={total} />
        )
      }
    </>
  );
};

export default Cart;
