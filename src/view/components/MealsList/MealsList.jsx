import React, { Fragment } from "react";
import List from "@mui/material/List";
import MealItem from "../MealItem/MealItem";
import Divider from "@mui/material/Divider"
import MealsContext from "../../context/MealsContext/MealsContext";

const myStyles = {
  list: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "100%",
  }
}

const MealsList = (props) => {
  const {list} = props;

  return (
    <List sx={myStyles.list}>
      {list.map((m, key) => (
        <Fragment key={key}>
          <MealItem key={m.id} data={m} />
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default MealsList;
