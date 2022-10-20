import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const snackbar = (props) => {
  const { msg, open, handleClose, severity } = props;

  return (
    <>
      <Snackbar open={open} autoHideDuration={1000}>
        <Alert onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};

snackbar.propTypes = {
  msg: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  severity: PropTypes.string
};

export default snackbar;
