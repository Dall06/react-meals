import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";

const myStyles = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
  },
  closeIcon: {
    color: "#d32f2f",
  },
  closeButton: {
    color: "#d32f2f",
    borderColor: "#d32f2f",
    '&:hover': {
      backgroundColor: '#fa7a7a',
      borderColor: '#d32f2f',
      boxShadow: 'none',
    },
  },
  
};

function OrderModal(props) {
  const { cart } = props;

  const [total, setTotal] = useState();

  const handleSetTotal = () => {
    const sum = cart.reduce((s, m) => s + m.price, 0);
    setTotal(sum);
  };

  useEffect(() => {
    handleSetTotal();
  });

  // return ReactDOM.createPortal(
  return createPortal(
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid sx={myStyles.box}>
        <Grid item>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={myStyles.title}
          >
            Meals order
          </Typography>
        </Grid>
        <Grid item>
          {cart.length > 0 ? (
            cart.map((meal, key) => (
              <>
                <Grid item xs={4} md={8} key={key}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={myStyles.title}
                  >
                    {meal.name}
                  </Typography>
                  <Grid item>
                    <Typography variant="body2" gutterBottom sx={myStyles.txt}>
                      {meal.price}
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={myStyles.txt}>
                      {meal.qty}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ))
          ) : (
            <Grid item xs={4} md={8}>
              <Typography gutterBottom variant="subtitle1" sx={myStyles.txt}>
                no meals in your order
              </Typography>
            </Grid>
          )}
        </Grid>
        <Divider />
        <Grid item>
          <Stack direction="row" spacing={2}>
            <Typography id="modal-modal-description" sx={myStyles.txt}>
              order cost
            </Typography>
            <Typography sx={myStyles.price}>${total}</Typography>
          </Stack>
        </Grid>
        <Grid container sx={myStyles.buttonBox}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<CloseIcon sx={myStyles.closeIcon}/>}
              sx={myStyles.closeButton}
              onClick={props.onClose}
            >
              Close
            </Button>
            <Button variant="contained" endIcon={<CheckIcon/>}>
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
