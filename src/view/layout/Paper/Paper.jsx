import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import styles from './Paper.module.css';

const paper = (props) => {
  return (
    <Paper elevation={2} className={styles.paper}>
      {props.children}
    </Paper>
  );
};

paper.propTypes = {
  children: PropTypes.any
};

export default paper;
