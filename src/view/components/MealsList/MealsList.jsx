import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import MealItem from '../MealItem/MealItem';
import Typography from '@mui/material/Typography';
import styles from './MealsList.module.css';

const MealsList = (props) => {
  const { list } = props;

  return (
    <>
      {list.length > 0 ? (
        <List className={styles.list}>
          {list.map((m) => (
            <MealItem key={m.id} data={m} id={m.id} />
          ))}
        </List>
      ) : (
        <Typography gutterBottom className={styles.txt} role="txt">
          No meals found in our system...
        </Typography>
      )}
    </>
  );
};

MealsList.propTypes = {
  list: PropTypes.array
};

export default MealsList;
