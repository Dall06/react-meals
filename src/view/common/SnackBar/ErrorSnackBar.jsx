import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorSnackBar = (props) => {
  const { msg, open, handleClose } = props;

  return (
    <>
      <Snackbar
        open={open} autoHideDuration={1000}>
        <Alert onClose={handleClose} severity="error">{msg}</Alert>
      </Snackbar>
    </>
  );
}

export default ErrorSnackBar;