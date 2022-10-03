import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Meals from "./MealsPage";

const View = () => {
  const [meals, setMeals] = useState([]);

  const handleAdd = (m) => {
    setMeals([...meals, m]);
    console.log(meals)
  };

  return (
    <>
      <NavBar />
      <Meals toCart={handleAdd} />
    </>
  );
};

export default View;
