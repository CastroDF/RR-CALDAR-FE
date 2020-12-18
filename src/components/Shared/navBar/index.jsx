import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
    <nav>
        <ul>
            <li>
                <Link to="/boilers">BOILERS</Link>
            </li>
            <li>
                <Link to="/boilertypes">BOILER  TYPES</Link>
            </li>
            <li>
                <Link to="/technicians">TECHNICIANS</Link>
            </li>
            <li>
                <Link to="/buildings">BUILDINGS</Link>
            </li>
            <li>
                <Link to="/appointments">APPOINTMENTS</Link>
            </li>
        </ul>
    </nav>
    );
  }
}export default NavBar;