import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './addbutton.module.css';
import Icon from '@material-ui/core/Icon';

export class addbutton extends Component {
  render () {
    return (
      <React.Fragment>
        <Link className={style.linkStyle} to="/addform">
          <div className={style.more}>
            <button className={style.addtech}>
                            Add
              <i style={buttonStyle} className="material-icons">
                <Icon>star</Icon>
              </i>
            </button>
          </div>
        </Link>
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
