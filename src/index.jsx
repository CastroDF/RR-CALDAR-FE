import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReduce from './redux/reducerers/rootReducer';

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(rootReduce, enhancer);
};

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
