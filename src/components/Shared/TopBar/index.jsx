import React from 'react'
import style from './TopBar.module.css';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <section className={style.container}>
    <h1 className={style.header}>Caldar</h1>
    <Link className={style.logOut} to="/login">Log out</Link>
  </section>
)

export default TopBar
