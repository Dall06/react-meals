import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MelasContext from './MealsContext';
import UseHttp from '../../hooks/use-http';
// import meals from "../../data/json/static_products.json"

const MealsProvider = (props) => {
  const BASE_URL = 'https://my-tests-ee27a-default-rtdb.firebaseio.com/';

  const { isLoading, error, request } = UseHttp();
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const url = `${BASE_URL}/meals.json`;
    const data = await request({ url });
    const list = data.filter((e) => {
      return e !== null;
    });
    setMeals(list);
  };

  useEffect(() => {
    fetchMeals();
  }, [request]);

  return (
    <MelasContext.Provider value={{ meals, isLoading, error }}>
      {props.children}
    </MelasContext.Provider>
  );
};

MealsProvider.propTypes = {
  children: PropTypes.any
};

export default MealsProvider;
