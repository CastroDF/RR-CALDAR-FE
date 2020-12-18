import React from 'react';
import { Link } from 'react-router-dom';
import style from './LeftBar.module.css';

const LeftBar = () => {
  return (
    <div className={style.leftBar}>
      <section className={style.header}>
        <h2 className={style.title}>
          CaldAR
        </h2>
      </section>
      <ul className={style.links}>
        <li>
        <Link className={style.linkNav} classto="/home" >HOME</Link>
        </li>
        <li>
          <Link className={style.linkNav} classto="/boilertypes">BOILER TYPES</Link>
        </li>
        <li>
        <Link className={style.linkNav} classto="/customers">CUSTOMERS</Link>
        </li>
      </ul>

    </div>
  )
}

export default LeftBar;
