import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

const Cart = (props) => {
  const { meal } = props;

  return (
    <>
      <Avatar>{1}</Avatar>
      <ShoppingCartIcon />
    </>
  );
};

export default Cart;
