import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MealsList from "../../components/MealsList/MealsList";
import MealsContext from "../../context/MealsContext/MealsContext";

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
    textAlign: "start",
  },
  h4: {
    fontWeight: "bold",
    color: "#42a5f5"
  },
};

const MealsPage = () => {
  const { meals } = useContext(MealsContext);

  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignment]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Let me show you our meals
            </Typography>
            <Typography paragraph={true}>
              Choose as many as you wish
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={2} sx={myStyles.paper}>
            <MealsList list={meals} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MealsPage;
