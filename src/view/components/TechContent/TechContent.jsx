import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../../layout/Paper/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './TechContent.module.css';

const techContent = (props) => {
  const { images } = props;

  return (
    <Paper>
      <Typography variant="h4" className={styles.title}>
        This technologies helped to my creation.
      </Typography>
      <Box>
        <Grid>
          {images.map((item) => (
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              key={item.title}
              className={styles.img}
            />
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

techContent.propTypes = {
  images: PropTypes.array
};

export default techContent;
