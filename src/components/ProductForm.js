import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { createProduct, updateProduct } from '../actions';
import { MODAL_TYPE_CREATE } from '../actions/types';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function ProductForm(props) {
  const { id, name = '', category = '', price = 0 } = props;

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [productName, setProductName] = useState(name);
  const [productCategory, setProductCategory] = useState(category);
  const [productPrice, setProductPrice] = useState(price);

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createProduct({ productName, productCategory, productPrice }));
  };

  const handleUpdate = () => {
    dispatch(updateProduct({ id, productName, productCategory, productPrice }));
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Create Product</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <TextField
          id="outlined-basic"
          label="Product Category"
          variant="outlined"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        />

        <TextField
          id="outlined-basic"
          label="Product Price"
          type="number"
          variant="outlined"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <Button
          variant="contained"
          color="primary"
          onClick={
            props['modal-type'] === MODAL_TYPE_CREATE
              ? handleCreate
              : handleUpdate
          }
          style={{ marginBottom: '20px' }}
        >
          {props['modal-type'] === MODAL_TYPE_CREATE
            ? 'Create Product'
            : 'Update Product'}
        </Button>
      </form>
    </div>
  );
}
