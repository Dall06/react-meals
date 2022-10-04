import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Meals from "./MealsPage";

const View = () => {

  return (
    <>
      <NavBar />
      <Meals toCart={handleAdd} />
    </>
  );
};

export default View;
