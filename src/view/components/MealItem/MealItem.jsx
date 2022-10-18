import React, { useState, Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SnackBar from '../../common/SnackBar/SnackBar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartActions from '../../../core/context/CartContext/Actions';
import styles from './MealItem.module.css';

const MealItem = ({ data, id }) => {
  const navigate = useNavigate();
  const actions = CartActions;

  const [qty, setQty] = useState(0);
  const [range, setRange] = useState([0]);
  const [open, setOpen] = React.useState(false);

  const { dispatch } = useContext(CartContext);

  const handleClose = (event, reason) => {
    event.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleRange = (start, end) => {
    const length = end - start;
    const result = Array.from({ length }, (_, i) => start + i);
    setRange(result);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (qty === 0) {
      console.log('error must be more than zero');
      setOpen(true);
      return;
    }

    dispatch({
      type: actions.ADD_TO_CART,
      payload: {
        data,
        quantity: qty
      }
    });

    setQty(0);
  };

  useEffect(() => {
    handleRange(0, 25);
  }, []);

  const handleGoToDetail = (event) => {
    event.preventDefault();
    navigate(`/react-meals/meals/${id}`);
  };

  return (
    <>
      <Grid container spacing={2} className={styles.container}>
        {/* img grid */}
        <Grid item xs={4} lg={1}>
          <Box>
            <img src={data.image} alt="food img" loading="lazy" className={styles.image} />
          </Box>
        </Grid>
        {/* data grid */}
        <Grid item xs={4} lg={6}>
          <Fragment>
            <Typography gutterBottom variant="subtitle1" className={styles.title}>
              {data.name}
            </Typography>
            <Typography variant="body2" gutterBottom className={styles.txt}>
              {data.description}
            </Typography>
          </Fragment>
        </Grid>
        {/* price grid */}
        <Grid item xs={2} lg={2}>
          <Typography variant="subtitle1" component="div" className={styles.price}>
            ${data.price}
          </Typography>
          <Button className={styles.button} onClick={handleGoToDetail}>
            More...
          </Button>
        </Grid>
        {/* select grid */}
        <Grid item xs={3} lg={1}>
          <InputLabel>
            <Typography gutterBottom variant="subtitle1" className={styles.txt}>
              Quantity
            </Typography>
          </InputLabel>
          <Select
            value={qty}
            label="quantity"
            onChange={handleChange}
            className={[styles.txt, styles.select].join(' ')}>
            {range.map((n, key) => (
              <MenuItem value={n} key={key}>
                {n}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {/* add to cart grid */}
        <Grid item xs={3} lg={2}>
          <InputLabel>
            <Typography gutterBottom variant="subtitle1" className={styles.txt}>
              Add to cart
            </Typography>
          </InputLabel>
          <IconButton onClick={handleClick} className={styles.iconButton}>
            <AddShoppingCartIcon />
          </IconButton>
        </Grid>
        {open && (
          <SnackBar
            open={open}
            handleClose={handleClose}
            severity="error"
            msg="Error: you cant order 0 products"
          />
        )}
      </Grid>
    </>
  );
};

MealItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.any
};

export default MealItem;
