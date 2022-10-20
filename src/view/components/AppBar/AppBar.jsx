import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from './AppBar.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const appbar = (props) => {
  const navigate = useNavigate();

  const handleGoToHome = (event) => {
    event.preventDefault();
    navigate('/react-meals/');
  };

  const handleGoToMeals = (event) => {
    event.preventDefault();
    navigate('/react-meals/meals');
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography className={styles.txt}>React-Meals</Typography>
            <Box className={styles.box}>
              <Button className={styles.button} variant="contained" onClick={handleGoToHome}>
                Home
              </Button>
              <Button className={styles.button} variant="contained" onClick={handleGoToMeals}>
                Meals
              </Button>
            </Box>
            <Box className={styles.box0}>{props.leadBtn}</Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

appbar.propTypes = {
  gotoHome: PropTypes.func,
  goToMeals: PropTypes.func,
  leadBtn: PropTypes.any
};

export default appbar;
