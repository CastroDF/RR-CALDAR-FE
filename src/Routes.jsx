import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/BoilerTypes';
import Appointments from './components/Appointments';
import Layout from "./components/Shared/Layout";


const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/boilerTypes" />
      <Route path="/boilertypes" >
        <Layout>
          <BoilerTypes/>
        </Layout>
      </Route>
      <Route path="/appointments" >
        <Layout>
          <Appointments/>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;