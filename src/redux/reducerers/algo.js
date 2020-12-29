const Algo = (state = 0, action) => {
  switch (action.type) {
  case 'SUM':
    return state + 1;
  default:
    return state;
  }
};

export default Algo;
