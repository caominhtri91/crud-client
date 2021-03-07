import { combineReducers } from 'redux';
import productReducer from './productReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  products: productReducer,
  modal: modalReducer,
});
