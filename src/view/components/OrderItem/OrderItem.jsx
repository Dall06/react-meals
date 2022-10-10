import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const myStyles = {
  txt: {
    color: "rgba(255, 255, 255, 0.5)",
    align: "left",
  },
  select: {
    boxShadow: 3,
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
    boxShadow: 3,
  },
  image: {
    width: "100%",
    height: "5rem",
  }
};

const OrderItem = (props) => {
  const { data } = props;

  return (
    <Grid container spacing={2}>
      {/* img grid */}
      <Grid item xs={4} lg={1}>
        <Fragment>
          <img src={data.image} alt="food img" loading="lazy" style={myStyles.image}/>
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

export default OrderItem;
