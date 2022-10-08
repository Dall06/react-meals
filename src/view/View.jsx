import React from "react";
import CartContextProvider from "./context/CartContext/CartProvider";
import MealsContextProvider from "./context/MealsContext/MealsProvider";
import MyRouterProvider from "./routes/RouterProvider"

const View = () => {
  return (
    <>
      <MealsContextProvider>
        <CartContextProvider>
          <MyRouterProvider />
        </CartContextProvider>
      </MealsContextProvider>
    </>
  );
};

export default View;
