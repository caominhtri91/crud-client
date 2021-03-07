import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../actions';

export default function SimpleModal({ ChildComponent }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ChildComponent {...modal.modal_props} modal-type={modal.modal_type} />
      </Modal>
    </div>
  );
}
