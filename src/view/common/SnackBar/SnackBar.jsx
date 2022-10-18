import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackBar = ({ msg, open, handleClose, severity }) => {
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

SnackBar.propTypes = {
  msg: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  severity: PropTypes.string
};

export default SnackBar;
