import { ADDCUSTOMER, DELETECUSTOMER, RECEIVE_POSTS } from '../constant/constantCustomers';

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  data: json,
  receivedAt: Date.now()
});

let nextCustomer = 0;

export const addCustomerAction = customer => ({
  type: ADDCUSTOMER,
  id: nextCustomer++,
  customer
});

export const deleteCustomerAction = id => ({
  type: DELETECUSTOMER,
  id
});

export const fetchData = () => {
  return (dispatch) => {
    return fetch('')
      .then(response => response.json())
      .then(json => dispatch(
        receivePosts(json)));
  };
};
