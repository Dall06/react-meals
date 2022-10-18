import React, { useState, useEffect, useContext } from 'react';
import UseHttp from '../../../core/hooks/use-http';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SnackBar from '../../common/SnackBar/SnackBar';
import IconButton from '@mui/material/Button';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartActions from '../../../core/context/CartContext/Actions';
import styles from './MealDetailPage.module.css';

const MealDetailPage = () => {
  const BASE_URL = 'https://my-tests-ee27a-default-rtdb.firebaseio.com/';

  const actions = CartActions;

  const { request } = UseHttp();
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({});
  const [qty, setQty] = useState(0);
  const [range, setRange] = useState([0]);
  const [severity, setSeverity] = useState('error');
  const [msg, setMsg] = useState('error generating snackbar');
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
      setSeverity('error');
      setMsg('You cant order 0 products');
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

    setSeverity('success');
    setMsg('Product added to cart');
    setQty(0);
  };

  const fetchMeal = async () => {
    const url = `${BASE_URL}/meals.json?orderBy="$key"&equalTo="${id}"`;
    const result = await request({ url });
    // console.log();
    setData(result[id]);
  };

  const handleGoBack = () => {
    navigate('/react-meals/meals/');
  };

  const handleGoToOrder = () => {
    navigate('/react-meals/order/');
  };

  useEffect(() => {
    fetchMeal();
    handleRange(0, 25);
  }, []);

  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} className={[styles.paper, styles.alignmentCenter].join(' ')}>
            <Typography variant="h4" className={styles.h4}>
              {data.name}
            </Typography>
            <Typography paragraph={true}>{data.description}</Typography>
          </Paper>
          <Paper elevation={2} className={[styles.paper, styles.alignmentStart].join(' ')}>
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
                    <Button
                      className={styles.btnOrder}
                      onClick={handleGoToOrder}
                      endIcon={<CheckIcon />}>
                      Go to order
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={12} className={styles.btnContainer}>
                    <Button
                      className={styles.btnOrder}
                      onClick={handleGoBack}
                      endIcon={<CancelIcon />}>
                      Go back
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {open && <SnackBar open={open} handleClose={handleClose} severity={severity} msg={msg} />}
    </>
  );
};

export default MealDetailPage;
