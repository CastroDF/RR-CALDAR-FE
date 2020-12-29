import { combineReducers } from 'redux';
import boilertypesReducer from './boilertypesReducer';

const rootReducer = combineReducers({
  data: boilertypesReducer
});

export default rootReducer;
