import React from 'react';
import PropTypes from 'prop-types';
import List from '../../layout/List/List';
import MealItem from '../MealItem/MealItem';
import Container from '@mui/material/Container';
import styles from './MealsList.module.css';

const mealsList = (props) => {
  const { list } = props;

  return (
    <>
      <Container className={styles.container} disableGutters maxWidth={false}>
        <List message="No meals found" len={list.length}>
          {list.map((m) => (
            <MealItem key={m.id} data={m} id={m.id} />
          ))}
        </List>
      </Container>
    </>
  );
};

mealsList.propTypes = {
  list: PropTypes.array
};

export default mealsList;
