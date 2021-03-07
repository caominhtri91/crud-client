import { FETCH_PRODUCT, OPEN_MODAL, CLOSE_MODAL } from './types';

export const fetchProduct = () => async (dispatch) => {
  const fetch_result = await fetch('http://localhost:3979/api/v1/get_list');
  const json_data = await fetch_result.json();

  dispatch({ type: FETCH_PRODUCT, payload: json_data.data });
};

export const createProduct = ({
  productName,
  productCategory,
  productPrice,
}) => async (dispatch) => {
  const create_result = await fetch('http://localhost:3979/api/v1/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: productName,
      category: productCategory,
      price: productPrice,
    }),
  });

  const create_json = await create_result.json();
  if (create_json.success) {
    const fetch_result = await fetch('http://localhost:3979/api/v1/get_list');
    const json_data = await fetch_result.json();

    dispatch({ type: FETCH_PRODUCT, payload: json_data.data });
    dispatch({ type: CLOSE_MODAL });
  }
};

export const updateProduct = ({
  id,
  productName,
  productCategory,
  productPrice,
}) => async (dispatch) => {
  const create_result = await fetch('http://localhost:3979/api/v1/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name: productName,
      category: productCategory,
      price: productPrice,
    }),
  });

  const create_json = await create_result.json();
  if (create_json.success) {
    const fetch_result = await fetch('http://localhost:3979/api/v1/get_list');
    const json_data = await fetch_result.json();

    dispatch({ type: FETCH_PRODUCT, payload: json_data.data });
    dispatch({ type: CLOSE_MODAL });
  }
};

export const deleteProduct = ({ id }) => async (dispatch) => {
  const create_result = await fetch('http://localhost:3979/api/v1/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });

  const delete_json = await create_result.json();
  if (delete_json.success) {
    const fetch_result = await fetch('http://localhost:3979/api/v1/get_list');
    const json_data = await fetch_result.json();

    dispatch({ type: FETCH_PRODUCT, payload: json_data.data });
  }
};

export const openModal = (modal_type, modal_props) => {
  return { type: OPEN_MODAL, payload: { modal_type, modal_props } };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
