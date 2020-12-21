import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/boilerTypes';
import Customers from './components/customers/index';
import Home from './components/home/';
import Layout from "./components/shared/layout";


const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home" >
        <Layout>
          <Home/>
        </Layout>
      </Route>
      <Route path="/boilertypes" >
        <Layout>
          <BoilerTypes/>
        </Layout>
      </Route>
      <Route path="/customers" >
        <Layout>
          <Customers/>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;