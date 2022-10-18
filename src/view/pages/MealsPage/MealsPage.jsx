import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MealsList from '../../components/MealsList/MealsList';
import MealsContext from '../../../core/context/MealsContext/MealsContext';
import styles from './MealsPage.module.css';

const MealsPage = () => {
  const { meals } = useContext(MealsContext);

  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item lg={12} xs={12}>
          <Paper elevation={2} className={[styles.paper, styles.alignment].join(' ')}>
            <Typography variant="h4" className={styles.h4}>
              Let me show you our meals
            </Typography>
            <Typography paragraph={true}>Choose as many as you wish</Typography>
          </Paper>
          <Paper elevation={2} className={[styles.paper, styles.listPaper].join(' ')}>
            <MealsList list={meals} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MealsPage;
