import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartButton from '../../components/CartButton/CartButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleGoToHome = (event) => {
    event.preventDefault();
    navigate('/react-meals/');
  };

  const handleGoToMeals = (event) => {
    event.preventDefault();
    navigate('/react-meals/meals');
  };

  const handleGoToCheckOut = (event) => {
    event.preventDefault();
    navigate('/react-meals/check-out');
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
            <Box className={styles.box0}>
              <CartButton checkout={handleGoToCheckOut} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
