import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './OrderItem.module.css';

const orderItem = (props) => {
  const { data } = props;

  return (
    <Grid container spacing={2}>
      {/* img grid */}
      <Grid item xs={4} lg={1}>
        <Fragment>
          <img src={data.image} alt="food img" loading="lazy" className={styles.image} />
        </Fragment>
      </Grid>
      {/* data grid */}
      <Grid item xs={4} lg={6}>
        <Fragment>
          <Typography gutterBottom variant="subtitle1" className={styles.title}>
            {data.name}
          </Typography>
          <Typography variant="body2" gutterBottom className={styles.txt}>
            {data.description}
          </Typography>
        </Fragment>
      </Grid>
      {/* price grid */}
      <Grid item xs={2} lg={2}>
        <Typography variant="subtitle1" component="div" className={styles.price}>
          ${data.price}
        </Typography>
      </Grid>
    </Grid>
  );
};

orderItem.propTypes = {
  data: PropTypes.object
};

export default orderItem;
