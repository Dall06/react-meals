import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import images from '../../../base/data/json/libs_images.json';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} className={[styles.paper, styles.alignmentCenter].join(' ')}>
            <Typography variant="h4" className={styles.h4}>
              Hello human! Welcome to react-meals app.
            </Typography>
            <Typography paragraph={true}>
              Im a demo app that shows how to use different react features for development
            </Typography>
          </Paper>
          <Paper elevation={2} className={[styles.paper, styles.alignmentStart].join(' ')}>
            <Typography variant="h4" className={styles.h4}>
              This technologies helped to my creation.
            </Typography>
            <Box>
              <Grid>
                {images.map((item) => (
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    key={item.title}
                    className={styles.img}
                  />
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
