import { ADDBOILERTYPE, DELETEBOILERTYPE, GET_BOILERTYPES_FETCHING, GET_BOILERTYPES_FULFILLED, GET_BOILERTYPES_REJECTED, SET_ADDING } from './actionsBoilerTypes';

let nextBoilerTypeId = 0;

export const addBoilerTypeAction = boilertype => ({
  type: ADDBOILERTYPE,
  id: nextBoilerTypeId++,
  boilertype
});

export const deleteBoilerTypeAction = id => ({
  type: DELETEBOILERTYPE,
  id
});

const getBoilerTypesFetching = () => ({
  type: GET_BOILERTYPES_FETCHING
});

const getBoilerTypesAction = (payload) => ({
  type: GET_BOILERTYPES_FULFILLED,
  payload
});

const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED
});

const setIsAdd = () => ({
  type: SET_ADDING
});

export const getBoilerTypes = () => dispatch => {
  dispatch(getBoilerTypesFetching());
  return fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types')
    .then(payload => payload.json())
    .then(response => {
      dispatch(getBoilerTypesAction(response));
    })
    .catch(() => {
      dispatch(getBoilerTypesRejected());
    });
};

export const setIsAdding = () => dispatch => {
  return dispatch(setIsAdd());
};
