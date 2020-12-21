import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Routes';
import './style/globalStyle.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
