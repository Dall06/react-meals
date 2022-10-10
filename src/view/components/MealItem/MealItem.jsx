import React, { useState, Fragment, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartContext from "../../context/CartContext/CartContext";
import CartAction from "../../context/CartContext/Actions";
import ErrorSnackBar from "../../common/SnackBar/ErrorSnackBar";
import { useNavigate } from "react-router-dom";

const myStyles = {
  txt: {
    color: "rgba(255, 255, 255, 0.5)",
    align: "left",
  },
  select: {
    boxShadow: 3
  },
  title: {
    fontWeight: "bold",
    color: "#e3f2fd",
  },
  price: {
    fontWeight: "bold",
    align: "center",
    color: "#0288d1",
  },
  iconButton: {
    boxShadow: 3
  },
  button: {
    textDecoration: "none",
    textTransform: 'none',
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)"
  },
  image: {
    width: "100%",
    height: "5rem",
  }
};

const MealItem = (props) => {
  const { data, id } = props;
  const navigate = useNavigate();
  const actions = CartAction;

  const [qty, setQty] = useState(0);
  const [range, setRange] = useState([0]);
  const [open, setOpen] = React.useState(false);

  const { dispatch } = useContext(CartContext)

  const handleClose = (event, reason) => {
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
      console.log("error must be more than zero");
      setOpen(true);
      return;
    }

    dispatch({
      type: actions.ADD_TO_CART,
      payload: {
        data,
        quantity: qty,
      },
    });

    setQty(0);
  };

  useEffect(() => {
    handleRange(0, 25);
  }, []);

  const handleGoToDetail = (event) => {
    event.preventDefault();
    navigate(`/meals/${id}`)
  }

  return (
    <Grid container spacing={2}>
      {/* select grid */}
      <Grid item xs={3} lg={1}>
        <InputLabel>
          <Typography gutterBottom variant="subtitle1" sx={myStyles.txt}>
            Quantity
          </Typography>
        </InputLabel>
        <Select
          value={qty}
          label="quantity"
          onChange={handleChange}
          sx={[myStyles.txt, myStyles.select]}
        >
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
          <Typography gutterBottom variant="subtitle1" sx={myStyles.txt}>
            Add to cart
          </Typography>
        </InputLabel>
        <IconButton onClick={handleClick} sx={myStyles.iconButton}>
          <AddShoppingCartIcon />
        </IconButton>
      </Grid>
      {/* img grid */}
      <Grid item xs={4} lg={1}>
        <Fragment>
        <img
            src={data.image}
            alt="food img"
            loading="lazy"
            style={myStyles.image}
          />
        </Fragment>
      </Grid>
      {/* data grid */}
      <Grid item xs={4} lg={6}>
        <Fragment>
          <Typography gutterBottom variant="subtitle1" sx={myStyles.title}>
            {data.name}
          </Typography>
          <Typography variant="body2" gutterBottom sx={myStyles.txt}>
            {data.description}
          </Typography>
        </Fragment>
      </Grid>
      {/* price grid */}
      <Grid item xs={2} lg={2}>
        <Typography variant="subtitle1" component="div" sx={myStyles.price}>
          ${data.price}
        </Typography>
        <Button sx={myStyles.button} onClick={handleGoToDetail}>More...</Button>
      </Grid>
      {
        open && (
          <ErrorSnackBar open={open} handleClose={handleClose} severity="error" msg="Error: you cant order 0 products"/>
        )
      }
    </Grid>
  );
};

export default MealItem;
