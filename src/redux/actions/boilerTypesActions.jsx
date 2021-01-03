import { ADDBOILERTYPE, DELETEBOILERTYPE, GET_BOILERTYPES_FETCHING, GET_BOILERTYPES_FULFILLED, GET_BOILERTYPES_REJECTED } from '../../constants/actionsBoilerTypes';

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

const getBoilerTypesAction = (data) => ({
  type: GET_BOILERTYPES_FULFILLED,
  data,
  receivedAt: Date.now()
});

const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED
});

export const getBoilerTypes = () => dispatch => {
  dispatch(getBoilerTypesFetching());
  return fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types')
    .then(data => data.json())
    .then(response => {
      dispatch(getBoilerTypesAction(response));
    })
    .catch(() => {
      dispatch(getBoilerTypesRejected());
    });
};
