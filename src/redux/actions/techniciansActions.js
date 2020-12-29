import { ADD_ID } from '../types';

export const getId = id => {
  return {
    type: ADD_ID,
    id: id
  };
};
