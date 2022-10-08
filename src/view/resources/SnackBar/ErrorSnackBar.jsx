import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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