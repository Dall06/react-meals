import React, { useContext, useState, useEffect } from 'react';
import Header from '../../layout/Header/Header';
import Grid from '@mui/material/Grid';
import CartContext from '../../../core/context/CartContext/CartContext';
import OrderList from '../../components/OrderList/OrderList';
import styles from './CheckOutPage.module.css';

const CheckOutPage = () => {
  const { state } = useContext(CartContext);
  const [disabled, setDisabled] = useState(false);

  const handleBlock = () => {
    console.log(state.cart.length);
    const len = state.cart.length;
    if (len > 0) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
    return;
  };

  useEffect(() => {
    handleBlock();
  }, [disabled]);

  return (
    <>
      <Grid container className={styles.container}>
        <Grid item lg={12} xs={12}>
          <Header
            head="Your order"
            description="Check that everything is ok before you continue..."
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <OrderList list={state.cart} total={state.total} disabled={disabled} />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOutPage;
