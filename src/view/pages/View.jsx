import React from "react";
import NavBar from "../ui/NavBar/NavBar";
import Meals from "./MealsPage";
import CartContextProvider from "../../ctx/Cart/CartProvider";
import MealsContextProvider from "../../ctx/Meals/MealsProvider";

const View = () => {

  return (
    <>
      <MealsContextProvider>
        <CartContextProvider>
          <NavBar />
          <Meals />
        </CartContextProvider>
      </MealsContextProvider>
    </>
  );
};

export default View;
