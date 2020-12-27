
import React from 'react';
import styles from './headerList.module.css';

const headerList = () => {
  return (
    <div className={styles.conteiner}>
      <p className={styles.idheader}>
            Id
      </p>
      <p className={styles.skillidheader}>
            SkillId
      </p>
      <p className={styles.name2header}>
           Description
      </p>
      <p className={styles.emailheader}>
            Stock
      </p>
      <p className={styles.actions}>
            Actions
      </p>
    </div>
  );
};

export default headerList;
