import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
};

const CheckOutPage = () => {

  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignment]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Hello human! Welcome to react-meals app.
            </Typography>
            <Typography paragraph={true}>
              Click me to go to the menu
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOutPage;