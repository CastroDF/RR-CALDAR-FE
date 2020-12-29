import { ADDBOILERTYPE, DELETEBOILERTYPE, RECEIVE_POSTS } from '../../constants/actionsBoilerTypes';

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  data: json,
  receivedAt: Date.now()
});

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

export const fetchData = () => {
  return (dispatch) => {
    return fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types')
      .then(response => response.json())
      .then(json => dispatch(
        receivePosts(json)));
  };
};
