import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import images from "../../../cmd/Config.js";
import { useNavigate, useParams } from "react-router-dom";
import UseHttp from "../../../hooks/use-http"

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
  },
  button: {
    textDecoration: "none",
    textTransform: 'none',
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)"
  },
  image: {
    width: "100%",
    height: "5rem",
  }
};

const MealDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const BASE_URL = "https://my-tests-ee27a-default-rtdb.firebaseio.com/"

  const { isLoading, error, request } = UseHttp();
  const [meal, setMeal] = useState({});

  const fetchMeal = async () => {
    const url = `${BASE_URL}/meals.json?orderBy="$key"&equalTo="${id}"`;
    const result = await request({ url });
    // console.log();
    setMeal(result[id])
  };

  const handleGoBack = () => {
    navigate("meals/")
  }

  useEffect(() => {
    fetchMeal();
  }, [request]);


  return (
    <>
      <Grid container spacing={2}>
        {/* img grid */}
        <Grid item xs={4} lg={1}>
          <>
            <img
              src={meal.image}
              alt="food img"
              loading="lazy"
              style={myStyles.image}
            />
          </>
        </Grid>
        {/* data grid */}
        <Grid item xs={4} lg={6}>
          <>
            <Typography gutterBottom variant="subtitle1" sx={myStyles.title}>
              { meal.name}
            </Typography>
            <Typography variant="body2" gutterBottom sx={myStyles.txt}>
              {meal.description}
            </Typography>
          </>
        </Grid>
        {/* price grid */}
        <Grid item xs={2} lg={2}>
          <Typography variant="subtitle1" component="div" sx={myStyles.price}>
            ${meal.price}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MealDetailPage;