import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import images from "../../../cmd/Config.js"
import { height } from "@mui/system";

const myStyles = {
  container: {
    display: "flex",
    padding: "1rem",
  },
  paper: {
    backgroundColor: "#121212",
    color: "rgba(255, 255, 255, 0.5)",
    background: "#151515",
    lineHeight: "60px",
    padding: "1rem",
    margin: "1rem"
  },
  alignmentCenter: {
    textAlign: "center",
  },
  alignmentStart: {
    textAlign: "start",
  },
  h4: {
    fontWeight: "bold",
    color: "#42a5f5"
  },
  img: {
    margin: "1rem",
    width: "20%",
    height: "90%"
  }
};

const HomePage = () => {

  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignmentCenter]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Hello human! Welcome to react-meals app.
            </Typography>
            <Typography paragraph={true}>
              Im a demo app that shows how to use different react features for development
            </Typography>
          </Paper>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignmentStart]}>
            <Typography variant="h4" sx={myStyles.h4}>
              This technologies helped to my creation.
            </Typography>
            <Box >
              {
                images.map(item => 
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    key={item.title}
                    style={myStyles.img}
                  />
                )
              }
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;