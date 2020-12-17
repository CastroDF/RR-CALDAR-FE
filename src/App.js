import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
