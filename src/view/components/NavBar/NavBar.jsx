import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cart from "../Cart/Cart"

const myStyles = {
  txt: {
    flexGrow: 1,
  },
};

const NavBar = (props) => {

  return (
    <AppBar position="sticky" componet="nav" edge="start">
      <Toolbar>
        <Typography variant="h6" component="div" sx={myStyles.txt}>
          react-meals
        </Typography>
        <Button color="inherit">
          
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
