import React, { useState, Fragment, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartContext from "../../context/CartContext/CartContext";
import CartAction from "../../context/CartContext/Actions";
import ErrorSnackBar from "../../resources/SnackBar/ErrorSnackBar";

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

const OrderItem = (props) => {
  const { data } = props;

  return (
    <Grid container spacing={2}>
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
          </Typography >
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

export default OrderItem;