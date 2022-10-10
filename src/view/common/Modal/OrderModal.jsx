import React from "react";
import { createPortal } from "react-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import CartItem from "../../components/CartItem/CartItem";

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
  buttonBox: {
    marginTop: "2rem",
    justifyContent: "end",
  },
  container: {
    display: "flex",
  },
  list: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "100%",
  }, 
  divider: {
    margin: "1rem"
  },
  button: {
    textTransform: 'none',
  }
};

const OrderModal = (props) => {
  const { cart, total, open, onClose, checkout } = props;

  // return ReactDOM.createPortal(
  return createPortal(
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id="order-modal"
    >
      <Grid sx={myStyles.box} container>
        <Grid item>
          <Typography
            sx={myStyles.title}>
            Meals order
          </Typography>
        </Grid>
        <Grid item container sx={myStyles.container}>
          {cart.length > 0 ? (
            <List dense={true} sx={myStyles.list}>
              {
                cart.map((meal) => (
                  <CartItem key={meal.id} data={meal} />
                ))
              }
            </List>
          ) : (
            <Typography gutterBottom sx={myStyles.txt}>
              Your order is empty...
            </Typography>
          )}
        </Grid>
        <Divider sx={myStyles.divider}/>
        <Grid item container>
          <Stack direction="row" spacing={2}>
            <Typography sx={myStyles.txt}>
              Order cost
            </Typography>
            <Typography sx={myStyles.price}>${total}</Typography>
          </Stack>
        </Grid>
        <Grid item container sx={myStyles.buttonBox}>
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<CloseIcon />}
              onClick={props.onClose}
              sx={myStyles.button}
            >
              Close
            </Button>
            <Button 
              variant="contained"
              sx={myStyles.button}
              onClick={checkout}
              endIcon={<CheckIcon />}>
              Order
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Modal>,
    document.getElementById("modal-root")
  );
}

export default OrderModal;
