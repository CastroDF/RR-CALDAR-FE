import { ADDCUSTOMER, DELETECUSTOMER, RECEIVE_POSTS } from '../constant/constantCustomers';

const initialState = {
  data: [],
  isAdding: false
};
function init (initialData) { return { data: initialData }; }
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDCUSTOMER:
    return {
      ...state,
      list: [
        ...state.data,
        {
          id_customer: action.id_customer,
          type: action.type
        }
      ]
    };
  case DELETECUSTOMER:
    return {
      ...state
    };
  case RECEIVE_POSTS:
    return init(action.payload);
  default:
    return state;
  }
};

export default customerReducer;
