import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from '@mui/material/ButtonGroup';
import CartContext from "../../context/CartContext/CartContext";
import CartAction from "../../context/CartContext/Actions"

const myStyles = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "#121212",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  txt: {
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.5)",
    align: "left",
  },
  title: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#0288d1",
  },
  price: {
    fontWeight: "bold",
    align: "center",
    color: "#e3f2fd",
  },
  closeIcon: {
    color: "#d32f2f",
  },
};

const CartItem = (props) => {
  const { data } = props;
  const actions = CartAction;

  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(CartContext)

  const handleAddCount = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.ADD_COUNT,
      payload: {
        data,
      },
    });
  };

  const handleMinusCount = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.MINUS_COUNT,
      payload: {
        data,
      },
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();

    dispatch({
      type: actions.REMOVE_FROM_CART,
      payload: {
        data,
      },
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sm={4}>
        <ListItemText
          primary={data.name}
          sx={myStyles.title}
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <ListItemText
          primary={`x${data.quantity}`}
          sx={myStyles.txt}
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <ListItemText
          primary={`$${(data.price * data.quantity)}`}
          sx={myStyles.price}
        />
      </Grid>
      <Grid item xs={4} sm={4}>
        <ButtonGroup>
          <Button aria-label="add" onClick={handleAddCount}>
            <AddIcon />
          </Button>
          <Button aria-label="minus" onClick={handleMinusCount}>
            <RemoveIcon />
          </Button>
          <Button aria-label="remove" onClick={handleRemove} sx={myStyles.closeIcon}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default CartItem;