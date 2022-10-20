import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UseHttp from '../../../core/hooks/use-http';
import CartContext from '../../../core/context/CartContext/CartContext';
import CartActions from '../../../core/context/CartContext/Actions';
import Header from '../../layout/Header/Header';
import DetailItem from '../../components/DetailItem/DetailItem';
import SnackBar from '../../layout/SnackBar/SnackBar';
import Grid from '@mui/material/Grid';
import styles from './MealDetailPage.module.css';

const detailPage = () => {
  const BASE_URL = 'https://my-tests-ee27a-default-rtdb.firebaseio.com/';

  const actions = CartActions;

  const { request } = UseHttp();
  const { id } = useParams();

  const [data, setData] = useState({});
  const [qty, setQty] = useState(0);
  const [severity, setSeverity] = useState('error');
  const [msg, setMsg] = useState('error generating snackbar');
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = useState([0]);

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

  useEffect(() => {
    fetchMeal();
    handleRange(0, 25);
  }, []);

  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item lg={12} xs={12}>
          <Header head={data.name} description={data.description} />
        </Grid>
        <Grid item lg={12} xs={12}>
          <DetailItem
            data={data}
            qty={qty}
            handleChange={handleChange}
            range={range}
            handleClick={handleClick}
          />
        </Grid>
      </Grid>
      {open && <SnackBar open={open} handleClose={handleClose} severity={severity} msg={msg} />}
    </>
  );
};

export default detailPage;
