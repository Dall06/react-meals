import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CartContext from "../../context/CartContext/CartContext";
import OrderList from "../../components/OrderList/OrderList";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const myStyles = {
  container: {
    display: "flex",
    padding: "1rem",
  },
  paper: {
    backgroundColor: "#121212",
    color: "rgba(255, 255, 255, 0.5)",
    background: "#151515",
    lineHeight: "60px",
    padding: "1rem",
  },
  alignment: {
    textAlign: "center",
  },
  h4: {
    fontWeight: "bold",
    color: "#42a5f5"
  },
  alignmentStart: {
    textAlign: "start",
  },
  txt: {
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.5)",
    align: "left",
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
  title: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#0288d1",
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
  },
  stack: {
    justifyContent: "end",
  }
};

const CheckOutPage = () => {
  const { state } = useContext(CartContext);

  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignmentStart]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Here is your order.
            </Typography>
            <Typography paragraph={true}>
              Check that everything is ok before you continue...
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={2} sx={myStyles.paper}>
            <Grid item>
              <OrderList list={state.cart} total={state.total} />
            </Grid>
            <Grid item container style={myStyles.stack}>
              <Stack direction="row" spacing={2}>
                <Typography sx={myStyles.txt}>
                  Order cost
                </Typography>
                <Typography sx={myStyles.price}>${state.total}</Typography>
              </Stack>
            </Grid>
            <Grid item container sx={myStyles.buttonBox}>
              <Stack direction="row" spacing={2}>
                <Button
                  startIcon={<CloseIcon />}
                  sx={myStyles.button}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={myStyles.button}
                  endIcon={<CheckIcon />}>
                  Continue
                </Button>
              </Stack>
            </Grid>
          </Paper>
        </Grid>
        <Divider sx={myStyles.divider} />
      </Grid>
    </>
  );
};

export default CheckOutPage;