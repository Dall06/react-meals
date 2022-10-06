import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import OrderModal from "../../ui/Modal/OrderModal";
import CartContext from "../../../ctx/Cart/CartContext";

const Cart = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open)
    setOpen(false)
  };

  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handleOpen}>
        {1}
      </Button>
      {
        open && (
          <OrderModal open={open} onClose={handleClose} cart={state.cart} />
        )
      }
    </>
  );
};

export default Cart;
