import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

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
  },
  alignment: {
    textAlign: "center",
  },
  h4: {
    fontWeight: "bold",
    color: "#42a5f5"
  },
  txt: {
    fontWeight: "bold",
    mr: 2,
  },
  linkTxt: {
    textTransform: 'none',
    textDecoration: 'none',
  },
  box: {
    margin: "2rem"
  }
};

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      <Grid container spacing={3} sx={myStyles.container}>
        <Grid item lg={12} xs={12} rowSpacing={3}>
          <Paper elevation={2} sx={[myStyles.paper, myStyles.alignment]}>
            <Typography variant="h4" sx={myStyles.h4}>
              Oops!... Sorry, an unexpected error has occurred.
            </Typography>
            <Box sx={myStyles.box}>
              <Typography paragraph={true}>
                {error.status}
              </Typography>
              <Typography paragraph={true}>
                {error.statusText}
              </Typography>
            </Box>
            <Link to={`/`} sx={myStyles.linkTxt}>
              <Typography paragraph={true} sx={myStyles.txt}>
                click me to return
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
