import React from "react";
import TopBar from "../topBar/";
import LeftBar from "../leftBar/";
import MainContainer from "../mainContainer/";
import style from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <LeftBar />
            <div className={style.content}>
                <TopBar />
                <MainContainer container={children}></MainContainer>
            </div>
        </div>
    )
}

export default Layout;
