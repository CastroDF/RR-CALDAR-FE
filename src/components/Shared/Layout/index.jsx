import React from 'react';
import TopBar from '../TopBar';
import LeftBar from '../LeftBar';
import MainContainer from '../MainContainer';
import style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <LeftBar />
      <div className={style.content}>
        <TopBar />
        <MainContainer container={children}></MainContainer>
      </div>
    </div>
  );
};

export default Layout;
