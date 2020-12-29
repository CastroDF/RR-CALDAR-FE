import { ADDBOILERTYPE, DELETEBOILERTYPE, RECEIVE_POSTS } from '../../constants/actionsBoilerTypes';

const initialState = {
  data: [],
  isAdding: false
};
function init (initialData) { return { data: initialData }; }
const boilertypesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDBOILERTYPE:
    return {
      ...state,
      list: [
        ...state.data,
        {
          id: action.id,
          skillsId: action.skillsId,
          description: action.description,
          stock: action.stock
        }
      ]
    };
  case DELETEBOILERTYPE:
    return {
      ...state
    };
  case RECEIVE_POSTS:
    return init(action.payload);
  default:
    return state;
  }
};

export default boilertypesReducer;
