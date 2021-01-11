import { combineReducers } from 'redux';
import boilertypesReducer from '../BoilerTypes/boilertypesReducer';
import ModalReducer from '../Modal/modalReducer';

const rootReducer = combineReducers({
  data: boilertypesReducer,
  modal: ModalReducer
});

export default rootReducer;
