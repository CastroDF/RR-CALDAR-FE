import { SHOW_MODAL, CLOSE_MODAL } from './constantsModal';

const initialState = {
  show: false,
  modalType: null,
  meta: {}
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_MODAL:
    return {
      ...state,
      show: true,
      modalType: action.modalType,
      meta: action.meta
    };
  case CLOSE_MODAL:
    return {
      ...state,
      show: false
    };
  default:
    return state;
  }
};

export default ModalReducer;
