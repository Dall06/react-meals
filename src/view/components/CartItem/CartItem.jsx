import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartAction from '../../../core/context/CartContext/Actions';
import styles from './CartItem.module.css';

const item = (props) => {
  const { data } = props;
  const actions = CartAction;

  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(CartContext);

  const handleAddCount = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.ADD_COUNT,
      payload: {
        data
      }
    });
  };

  const handleMinusCount = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.MINUS_COUNT,
      payload: {
        data
      }
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.REMOVE_FROM_CART,
      payload: {
        data
      }
    });
  };

  return (
    <Grid container spacing={2} className={styles.item}>
      <Grid item xs={4} sm={4}>
        <ListItemText primary={data.name} className={styles.title} />
      </Grid>
      <Grid item xs={4} sm={2}>
        <ListItemText primary={`x${data.quantity}`} className={styles.txt} />
      </Grid>
      <Grid item xs={4} sm={2}>
        <ListItemText primary={`$${data.price * data.quantity}`} className={styles.price} />
      </Grid>
      <Grid item xs={4} sm={4}>
        <ButtonGroup>
          <Button aria-label="add" onClick={handleAddCount}>
            <AddIcon />
          </Button>
          <Button aria-label="minus" onClick={handleMinusCount}>
            <RemoveIcon />
          </Button>
          <Button aria-label="remove" onClick={handleRemove} className={styles.closeIcon}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

item.propTypes = {
  data: PropTypes.object
};

export default item;
