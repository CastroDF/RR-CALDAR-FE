import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import BoilerTypes from './components/BoilerTypes';
import Appointments from './components/Appointments';
<<<<<<< HEAD
import Buildings from './components/Buildings';
import Boilers from './components/Boilers';
import Layout from './components/Shared/Layout';
import Customers from './components/Customers';
import Technicians from './components/Technicians';
=======
import Technicians from './components/Technicians';
import Layout from './components/Shared/Layout';
import Addform from './components/Technicians/Addform';

>>>>>>> 0231f77... error routes
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
      <Route path="/customers" >
        <Layout>
          <Customers/>
        </Layout>
      </Route>
      <Route path="/technicians" >
        <Layout>
          <Technicians/>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
