import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialProps = {
  open: false,
  modal_type: null,
  modal_props: {},
};

export default function productReducer(state = initialProps, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        open: true,
        modal_type: action.payload.modal_type,
        modal_props: action.payload.modal_props,
      };
    case CLOSE_MODAL:
      return { open: false, modal_type: null, modal_props: {} };
    default:
      return state;
  }
}
