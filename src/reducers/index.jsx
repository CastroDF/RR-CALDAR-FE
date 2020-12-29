import addCustomer from './addCustomer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  add: addCustomer
});

export default allReducers;
