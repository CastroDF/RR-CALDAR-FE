import { combineReducers } from 'redux';
import Technicians from './TechnicianReducer';
import Algo from './algo';

const rootReducer = combineReducers({
  Technician: Technicians,
  Algo
});

export default rootReducer;
