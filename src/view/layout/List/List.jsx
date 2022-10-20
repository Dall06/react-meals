import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import styles from './List.module.css';

const list = (props) => {
  const { len, message } = props;

  return len > 0 ? (
    <List className={styles.list}>{props.children}</List>
  ) : (
    <Typography gutterBottom className={styles.txt} role="txt">
      {message}
    </Typography>
  );
};

list.propTypes = {
  len: PropTypes.number,
  message: PropTypes.string,
  children: PropTypes.any
};

export default list;
