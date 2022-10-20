import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import styles from './Modal.module.css';

const modal = (props) => {
  const { open, onClose } = props;

  // return ReactDOM.createPortal(
  return createPortal(
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="modal">
        <Grid className={styles.box} container>
          {props.children}
        </Grid>
      </Modal>{' '}
    </>,
    document.getElementById('modal-root')
  );
};

modal.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  checkout: PropTypes.func
};

export default modal;
