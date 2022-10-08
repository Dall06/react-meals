import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import OrderModal from "../../common/Modal/OrderModal";
import CartContext from "../../context/CartContext/CartContext";

const CartButton = (props) => {
  const { checkout } = props;

  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
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
      {
        open && (
          <OrderModal
            open={open}
            onClose={handleClose}
            cart={state.cart}
            checkout={handleCheckOut}
            total={state.total} />
        )
      }
    </>
  );
};

export default CartButton;
