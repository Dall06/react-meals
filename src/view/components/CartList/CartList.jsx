import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../../layout/List/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import CartItem from '../../components/CartItem/CartItem';
import styles from './CartList.module.css';

const cartList = (props) => {
  const { cart, quantity, total, onCheckout, onClose } = props;

  const [disabled, setDisabled] = useState(true);

  const handleBlock = () => {
    if (quantity > 0) {
      setDisabled(false);
      console.log(disabled);
      return;
    }
    setDisabled(true);
    return;
  };

  useEffect(() => {
    handleBlock();
  }, [quantity]);

  return (
    <>
      <Grid item>
        <Typography className={styles.title}>Meals order</Typography>
      </Grid>
      <Grid item container className={styles.container}>
        <List message="No meals found" len={cart.length}>
          {cart.map((m) => (
            <CartItem key={m.id} data={m} id={m.id} />
          ))}
        </List>
      </Grid>
      <Grid item container>
        <Stack direction="row" spacing={2}>
          <Typography className={styles.txt}>Order cost</Typography>
          <Divider
            light
            flexItem={true}
            orientation="horizontal"
            variant="fullWidth"
            className={styles.divider}
          />
          <Typography className={styles.price}>${total}</Typography>
        </Stack>
      </Grid>
      <Grid item container className={styles.buttonBox}>
        <Stack direction="row" spacing={2}>
          <Button startIcon={<CloseIcon />} onClick={onClose} className={styles.button}>
            Close
          </Button>
          <Button
            variant="contained"
            className={styles.button}
            onClick={onCheckout}
            disabled={disabled}
            endIcon={<CheckIcon />}>
            Order
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

cartList.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  onCheckout: PropTypes.func,
  onClose: PropTypes.func,
  cartlen: PropTypes.number,
  quantity: PropTypes.number
};

export default cartList;
