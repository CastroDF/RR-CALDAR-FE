import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
    <nav>
        <h1>CALDAR</h1>
        <ul>
            <li>
                <Link to="/operator">OPERATOR</Link>
            </li>
            <li>
                <Link to="/admin">ADMINISTRATOR</Link>
            </li>
            <li>
                <Link to="/super">SUPER ADMINISTRATOR</Link>
            </li>
        </ul>
    </nav>
    );
  }
}export default NavBar;