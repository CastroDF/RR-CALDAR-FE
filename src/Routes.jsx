import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/BoilerTypes';
import TopBar from "./components/Shared/topBar";
import LeftBar from "./components/Shared/leftBar";
import MainContainer from "./components/Shared/MainContainer";


const wrapWithNav = (component) => (
  <div>
    <TopBar/>
    <div>
      <LeftBar />
      <MainContainer container={component}></MainContainer>
    </div>
  </div>
);

const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/boilerTypes" />
      <Route path="/boilertypes" >
        {wrapWithNav(<BoilerTypes />)}
      </Route>
    </Switch>
  );
};

export default Routes;