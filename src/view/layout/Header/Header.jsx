import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../Paper/Paper';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';

const header = (props) => {
  const { head, description } = props;

  return (
    <Paper>
      <Typography variant="h4" className={styles.head}>
        {head}
      </Typography>
      <Typography paragraph={true}>{description}</Typography>
    </Paper>
  );
};

header.propTypes = {
  children: PropTypes.any,
  head: PropTypes.string,
  description: PropTypes.string
};

export default header;
