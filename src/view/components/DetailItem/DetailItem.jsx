import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/Button';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './DetailItem.module.css';

const detailItem = (props) => {
  const { data, qty, handleChange, range, handleClick } = props;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/react-meals/meals/');
  };

  const handleGoToOrder = () => {
    navigate('/react-meals/order/');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <img src={data.image} alt="food img" loading="lazy" className={styles.image} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h4" className={styles.h4}>
          ${data.price}
        </Typography>
        <Grid container className={styles.shoppingContainer}>
          {/* select grid */}
          <Grid item xs={3} lg={1} className={styles.shoppingItem}>
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
          <Grid item xs={3} lg={2} className={styles.shoppingItem}>
            <InputLabel>
              <Typography gutterBottom variant="subtitle1" className={styles.txt}>
                Add to cart
              </Typography>
            </InputLabel>
            <IconButton onClick={handleClick} className={styles.iconButton}>
              <AddShoppingCartIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} lg={12} className={styles.btnContainer}>
            <Button className={styles.btnOrder} onClick={handleGoToOrder} endIcon={<CheckIcon />}>
              Go to order
            </Button>
          </Grid>
          <Grid item xs={12} lg={12} className={styles.btnContainer}>
            <Button className={styles.btnOrder} onClick={handleGoBack} endIcon={<CancelIcon />}>
              Go back
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

detailItem.propTypes = {
  data: PropTypes.object
};

export default detailItem;
