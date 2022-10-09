import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CartButton from "../../components/CartButton/CartButton"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const myStyles = {
  txt: {
    fontWeight: "bold",
    mr: 2,
  },
  box: {
    flexGrow: 1,
    display: 'flex',
  },
  flex0: {
    flexGrow: 0,
  },
  button: {
    my: 2,
    color: 'white',
    textTransform: 'none',
    margin: 1,
  },
  linkTxt: {
    textTransform: 'none',
    textDecoration: 'none',
  }
};

const NavBar = () => {
  const navigate = useNavigate();

  const handleGoToHome = (event) => {
    event.preventDefault();
    navigate('/');
  }

  const handleGoToMeals = (event) => {
    event.preventDefault();
    navigate('/meals');
  }

  const handleGoToCheckOut = (event) => {
    event.preventDefault();
    navigate('/check-out');
  }

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              href="/"
              sx={myStyles.txt}
            >
              React-Meals
            </Typography>
            <Box sx={myStyles.box}>
              <Button sx={myStyles.button} variant="contained" onClick={handleGoToHome}>Home</Button>
              <Button
                sx={myStyles.button}
                variant="contained"
                onClick={handleGoToMeals}>Meals</Button>
            </Box>
            <Box sx={myStyles.flex0}>
              <CartButton checkout={handleGoToCheckOut}/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
