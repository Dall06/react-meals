import React from 'react';
import CartContextProvider from '../core/context/CartContext/CartProvider';
import MealsContextProvider from '../core/context/MealsContext/MealsProvider';
import MyRouterProvider from '../base/routes/RouterProvider';

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
