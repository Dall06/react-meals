import React, { Fragment } from "react";
import List from "@mui/material/List";
import MealItem from "../MealItem/MealItem";
import Divider from "@mui/material/Divider"

const MealsList = (props) => {
  const { mealList } = props;

  return (
    <List
      sx={{
        width: "100%",
        position: "relative",
        overflow: "auto",
        maxHeight: "100%",
      }}
    >
      {mealList.map((m, key) => (
        <Fragment key={key}>
          <MealItem key={m.id} data={m} toCart={props.toCart}/>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default MealsList;
