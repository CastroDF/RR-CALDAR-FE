import { ADDBOILERTYPE, DELETEBOILERTYPE, GET_BOILERTYPES_FETCHING, GET_BOILERTYPES_FULFILLED, GET_BOILERTYPES_REJECTED, SET_ADDING } from './actionsBoilerTypes';

const initialState = {
  list: [],
  fecha: '',
  IsLoading: false,
  error: false,
  isAdding: false
};

const boilertypesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDBOILERTYPE:
    return {
      ...state,
      list: [
        ...state.list,
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
  case GET_BOILERTYPES_FETCHING:
    return {
      ...state,
      isLoading: true
    };
  case GET_BOILERTYPES_FULFILLED:
    return {
      ...state,
      isLoading: false,
      list: action.payload
    };
  case GET_BOILERTYPES_REJECTED:
    return {
      ...state,
      isLoading: false,
      error: true
    };
  case SET_ADDING:
    return {
      ...state,
      isAdding: false
    };
  default:
    return state;
  }
};

export default boilertypesReducer;
