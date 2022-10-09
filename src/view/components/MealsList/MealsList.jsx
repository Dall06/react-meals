import React, { Fragment } from "react";
import List from "@mui/material/List";
import MealItem from "../MealItem/MealItem";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const myStyles = {
  list: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "80vh",
  }
}

const MealsList = (props) => {
  const { list } = props;

  return (
    <>
      {list.length > 0 ? (
        <List sx={myStyles.list}>
          {list.map((m, key) => (
            <Fragment key={key}>
              <MealItem key={m.id} data={m} id={m.id} />
            </Fragment>
          ))}
        </List>
      ) : (
        <Typography gutterBottom sx={myStyles.txt}>
          No meals found in our system...
        </Typography>
      )}
    </>
  );
};

export default MealsList;
