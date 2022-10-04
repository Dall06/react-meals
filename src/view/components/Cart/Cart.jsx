import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import OrderModal from "../../ui/Modal/Modal";

const Cart = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open)
    setOpen(false)
  };

  return (
    <>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handleOpen}>
        {1}
      </Button>
      {
        open && (
          <OrderModal open={open} onClose={handleClose} cart={[]}/>
        )
      }
    </>
  );
};

export default Cart;
