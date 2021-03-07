import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { fetchProduct, openModal } from '../actions';
import Table from './Table';
import Modal from './Modal';
import ProductForm from './ProductForm';
import { MODAL_TYPE_CREATE } from '../actions/types';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleOpen = (modal_type) => {
    dispatch(openModal(modal_type));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: '20px' }}
        onClick={() => handleOpen(MODAL_TYPE_CREATE)}
      >
        Create Product
      </Button>
      <Table rows={products} />
      <Modal ChildComponent={ProductForm} />
    </div>
  );
}

export default App;
