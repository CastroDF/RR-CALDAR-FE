import React, { Component } from 'react';
import styles from "./MainContainer.module.css";

class LeftBar extends Component {
  render() {
    return (
   <div className={styles.MainContainer}>
     {this.props.container}
   </div>
    );
  }
}export default LeftBar;