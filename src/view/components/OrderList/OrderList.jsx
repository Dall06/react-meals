import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../../layout/List/List';
import Paper from '../../layout/Paper/Paper';
import OrderItem from '../OrderItem/OrderItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import SnackBar from '../../layout/SnackBar/SnackBar';
import { useNavigate } from 'react-router-dom';
import styles from './OrderList.module.css';

const orderList = (props) => {
  const { list, total, disabled } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    event.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleGoToMeals = (event) => {
    event.preventDefault();
    navigate('/react-meals/meals');
  };

  return (
    <>
      <Paper elevation={2} className={styles.paper}>
        <Grid item>
          <List message="No meals found in your order" len={list.length}>
            {list.map((m) => (
              <OrderItem key={m.id} data={m} />
            ))}
          </List>
        </Grid>
        <Grid item container style={styles.stack}>
          <Stack direction="row" spacing={2}>
            <Typography className={styles.txt}>Order cost</Typography>
            <Typography className={styles.price}>${total}</Typography>
          </Stack>
        </Grid>
        <Grid item container className={styles.buttonBox}>
          <Stack direction="row" spacing={2}>
            <Button startIcon={<CloseIcon />} className={styles.button} onClick={handleGoToMeals}>
              Cancel
            </Button>
            <Button
              variant="contained"
              className={styles.button}
              disabled={disabled}
              onClick={handleClick}
              endIcon={<CheckIcon />}>
              Continue
            </Button>
            {open && (
              <SnackBar
                open={open}
                handleClose={handleClose}
                severity="warning"
                msg="TODO: method not implemented"
              />
            )}
          </Stack>
        </Grid>
      </Paper>
    </>
  );
};

orderList.propTypes = {
  list: PropTypes.array,
  total: PropTypes.number,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func
};

export default orderList;
