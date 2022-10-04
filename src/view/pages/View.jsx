import React from "react";
import NavBar from "../ui/NavBar/NavBar";
import Meals from "./MealsPage";
import CartContextProvider from "../../ctx/Cart/CartProvider";

const View = () => {

  return (
    <>
    <CartContextProvider>
      <NavBar />
      <Meals />
    </CartContextProvider>
    </>
  );
};

export default View;
