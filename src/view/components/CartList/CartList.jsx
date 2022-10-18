import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import CartItem from '../../components/CartItem/CartItem';
import styles from './CartList.module.css';

const CartList = (props) => {
  const { cart, cartlen, total, onCheckout, onClose } = props;

  const [disabled, setDisabled] = useState(true);

  const handleBlock = () => {
    if (cartlen > 0) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
    return;
  };

  useEffect(() => {
    handleBlock();
  }, []);

  return (
    <>
      <Grid item>
        <Typography className={styles.title}>Meals order</Typography>
      </Grid>
      <Grid item container className={styles.container}>
        {cart.length > 0 ? (
          <List dense={true} className={styles.list}>
            {cart.map((meal) => (
              <CartItem key={meal.id} data={meal} />
            ))}
          </List>
        ) : (
          <Typography gutterBottom className={styles.txt}>
            Your order is empty...
          </Typography>
        )}
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

CartList.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  onCheckout: PropTypes.func,
  onClose: PropTypes.func,
  cartlen: PropTypes.number
};

export default CartList;
