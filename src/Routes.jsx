import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/boilerTypes';
import Layout from "./components/shared/layout";


const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/boilerTypes" />
      <Route path="/boilertypes" >
        <Layout>
          <BoilerTypes/>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;