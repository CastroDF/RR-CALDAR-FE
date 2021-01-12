import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './addbutton.module.css';

export class addbutton extends Component {
  render () {
    return (
      <React.Fragment>
        <Link className={style.linkStyle} to="/boilerTypes">
          <div className={style.more}>
            <button className={style.addtech}>+</button>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default addbutton;
