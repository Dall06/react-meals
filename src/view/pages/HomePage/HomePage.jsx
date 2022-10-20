import React from 'react';
import Header from '../../layout/Header/Header';
import TechContent from '../../components/TechContent/TechContent';
import Grid from '@mui/material/Grid';
import styles from './HomePage.module.css';
import images from '../../../base/data/json/libs_images.json';

const HomePage = () => {
  return (
    <>
      <Grid container className={styles.container}>
        <Grid item lg={12} xs={12}>
          <Header
            head="Hello human!, to react-meals app"
            description="im a demo app that shows how a react app could be created"
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <TechContent images={images} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
