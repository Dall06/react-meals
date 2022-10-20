import React, { useContext } from 'react';
import Header from '../../layout/Header/Header';
import Grid from '@mui/material/Grid';
import MealsList from '../../components/MealsList/MealsList';
import Paper from '../../layout/Paper/Paper';
import MealsContext from '../../../core/context/MealsContext/MealsContext';
import styles from './MealsPage.module.css';

const mealsPage = () => {
  const { meals } = useContext(MealsContext);

  return (
    <>
      <Grid container className={styles.container}>
        <Grid item lg={12} xs={12}>
          <Header
            head="Our Meals"
            description="These are some meals that we offer you, choose as many as you like"
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Paper>
            <MealsList list={meals} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default mealsPage;
