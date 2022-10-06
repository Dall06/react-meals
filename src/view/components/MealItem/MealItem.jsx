import React, { useState, Fragment, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartContext from "../../../ctx/Cart/CartContext";
import CartAction from "../../../ctx/Cart/Actions"

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
  }
};

const Item = (props) => {
  const { data } = props;
  const actions = CartAction;

  const [qty, setQty] = useState(0);
  const [range, setRange] = useState([0]);

  const { dispatch } = useContext(CartContext)

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
            src="https://picsum.photos/100/100"
            alt="food img"
            loading="lazy"
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
      </Grid>
    </Grid>
  );
};

export default Item;
