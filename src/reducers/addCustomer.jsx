const addCustomer = (state = false, action) => {
  switch (action.type) {
  case 'add':
    return !state;
  }
};

export default addCustomer;
