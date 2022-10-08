import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Cart from "../../components/CartList/CartList"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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

const NavBar = (props) => {
  const pages = ['welcome', 'meals'];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              href="/"
              sx={myStyles.txt}
            >
              react-meals
            </Typography>
            <Box sx={myStyles.box}>
              <Link to={`/`} sx={myStyles.linkTxt}>
                <Button sx={myStyles.button} variant="contained">home</Button>
              </Link>
              <Link to={`meals/`} sx={myStyles.linkTxt}>
                <Button sx={myStyles.button} variant="contained">meals</Button>
              </Link>
            </Box>
            <Box sx={myStyles.flex0}>
              <Cart />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
