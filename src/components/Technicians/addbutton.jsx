import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './addbutton.module.css';

export class addbutton extends Component {
  render () {
    return (
      <React.Fragment>
        <div className={style.more}>
          <Link className={style.linkStyle} to="/technicians/addform">
            <button className={style.addtech}>
              Add
              <i style={buttonStyle} className="material-icons">
                add_circle_outline
              </i>
            </button>
          </Link>
        </div>
      </React.Fragment>

    );
  }
}
const buttonStyle = {
  color: '#7DBB45',
  alignSelf: 'center',
  marginLeft: '5px'
};

export default addbutton;
