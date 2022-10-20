import React from 'react';
import { useRouteError, useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  const handleGoToHome = (event) => {
    event.preventDefault();
    navigate('react-meals/');
  };

  return (
    <>
      <Grid container spacing={3} className={styles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} className={[styles.paper, styles.alignment]}>
            <Typography variant="h4" className={styles.h4}>
              Oops!... Sorry, an unexpected error has occurred.
            </Typography>
            <Box className={styles.box}>
              <Typography paragraph={true}>{error.status}</Typography>
              <Typography paragraph={true}>{error.statusText || error.message}</Typography>
            </Box>
            <Button onClick={handleGoToHome} className={[styles.linkTxt, styles.txt]}>
              <Link>Click me to return</Link>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
