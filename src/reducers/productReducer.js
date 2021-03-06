import { FETCH_PRODUCT } from '../actions/types';

export default function productReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload || [];
    default:
      return state;
  }
}
