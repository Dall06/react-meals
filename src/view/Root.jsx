import React from 'react';
import AppBar from './components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import CartButton from './components/CartButton/CartButton';

const root = () => {
  return (
    <>
      <AppBar leadBtn={<CartButton />} />
      <Outlet />
    </>
  );
};

export default root;
