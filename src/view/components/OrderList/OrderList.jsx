import React, { Fragment } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import OrderItem from "../OrderItem/OrderItem";

const myStyles = {
  list: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "100%",
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
  divider: {
    margin: "1rem"
  },
  button: {
    textTransform: 'none',
  }
}

const OrderList = (props) => {
  const { list } = props;

  return (
    <>
      {list.length > 0 ? (
        <List dense={true} sx={myStyles.list}>
          {list.map((m, key) => (
            <Fragment key={key}>
              <OrderItem key={m.id} data={m} />
            </Fragment>
          ))}
        </List>
      ) : (
        <Typography gutterBottom sx={myStyles.txt} role="txt">
          Your order is empty...
        </Typography>
      )}
    </>
  );
};

export default OrderList;
