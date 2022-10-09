import React, { useEffect, useState } from "react";
import MelasContext from "./MealsContext";
// import meals from "../../data/json/static_products.json"
import UseHttp from "../../../hooks/use-http"

const MelasProvider = (props) => {
  const BASE_URL = "https://my-tests-ee27a-default-rtdb.firebaseio.com/"

  const { isLoading, error, request } = UseHttp();
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const url = `${BASE_URL}/meals.json`;
    const data = await request({ url });
    const list = data.filter(e => {
      return e !== null;
    });
    setMeals(list)
  };

  useEffect(() => {
    fetchMeals();
  }, [request]);

  return (
    <MelasContext.Provider value={{meals, isLoading, error}}>
      {props.children}
    </MelasContext.Provider>
  );
};

export default MelasProvider;
