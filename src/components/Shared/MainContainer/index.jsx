import React from 'react';
import styles from './MainContainer.module.css';

const LeftBar = ({ container }) => {
  return (
    <div className={styles.MainContainer}>
      {container}
    </div>
  );
};
export default LeftBar;
