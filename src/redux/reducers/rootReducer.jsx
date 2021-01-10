import { combineReducers } from 'redux';
import boilertypesReducer from '../BoilerTypes/boilertypesReducer';

const rootReducer = combineReducers({
  data: boilertypesReducer
});

export default rootReducer;
