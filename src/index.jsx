import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

store.dispatch();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
