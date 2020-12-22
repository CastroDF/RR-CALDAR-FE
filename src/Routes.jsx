import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/BoilerTypes';
import Appointments from './components/Appointments';
import Buildings from './components/Buildings';
import Boilers from './components/Boilers';
import Layout from './components/Shared/Layout';
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
      <Route path="/buildings" >
        <Layout>
          <Buildings/>
        </Layout>
      </Route>
      <Route path="/boilers" >
        <Layout>
          <Boilers/>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
