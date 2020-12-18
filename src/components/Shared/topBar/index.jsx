import React from 'react'
import style from './TopBar.module.css';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <section className={style.section}>
    <h1>Caldar</h1>
    <Link className={style.link} to="/login">Logout</Link>
  </section>
)

export default TopBar