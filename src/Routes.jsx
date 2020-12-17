import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoilerTypes from './components/BoilerTypes/BoilerTypes';
import TopBar from "./components/share/topBar/TopBar";
import LeftBar from "./components/share/leftBar/LeftBar";
import MainContainer from "./components/share/MainContainer/MainContainer";
import styles from  "./Routes.module.css";

const wrapWithNav = (component) => (
  <div className={styles.Main}>
    <TopBar className={styles.TopBar}/>
    <div className={styles.Content}>
      <LeftBar className={styles.LeftBar}/>
      <MainContainer className={styles.MainContainer} container={component}></MainContainer>
    </div>
  </div>
);

const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/companies" />
      <Route path="/companies" >
        {wrapWithNav(<BoilerTypes />)}
      </Route>
    </Switch>
  );
};

export default Routes;