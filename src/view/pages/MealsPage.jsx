import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MealsList from "../components/MealsList/MealsList";

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

const list = [
  {
    id: "1",
    name: "Taco al pastor",
    description: "Taco con carne al pastor y piña",
    price: 15.1,
  },
  {
    id: "2",
    name: "Taco de chorizo",
    description: "Taco con chorizo",
    price: 16.1,
  },
  {
    id: "3",
    name: "Torta de jamon",
    description: "Torta rellena de jamon, lechuga y jitomate",
    price: 20.1,
  },
  {
    id: "4",
    name: "Taco al pastor",
    description: "Taco con carne al pastor y piña",
    price: 15.1,
  },
  {
    id: "5",
    name: "Taco de chorizo",
    description: "Taco con chorizo",
    price: 16.1,
  },
  {
    id: "6",
    name: "Torta de jamon",
    description: "Torta rellena de jamon, lechuga y jitomate",
    price: 20.1,
  },
];

const Meals = (props) => {

  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignment]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Welcome to react demo app
            </Typography>
            <Typography paragraph={true}>
              Feel free to test the app by adding meals to your shopping cart
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={2} sx={myStyles.paper}>
            <MealsList mealList={list} toCart={props.toCart}/>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Meals;
