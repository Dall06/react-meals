import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Cart from "../../components/Cart/Cart"

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
        <Cart/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
