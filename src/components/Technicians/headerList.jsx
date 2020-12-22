
import React from 'react';
import styles from './headerList.module.css';

const headerList = () => {
  return (
    <div className={styles.conteiner}>
      <p className={styles.idheader}>
            Id
      </p>
      <p className={styles.nameheader}>
            First name
      </p>
      <p className={styles.name2header}>
            Last name
      </p>
      <p className={styles.emailheader}>
            Email
      </p>
      <p className={styles.typeidheader}>
            Type Ids
      </p>
      <p className={styles.skillidheader}>
            Skills Id
      </p>
      <p className={styles.hourrateheader}>
            Hour rate
      </p>
      <p className={styles.dailycapheader}>
            Daily capacity
      </p>
      <p className={styles.updateheader}>
            Last update
      </p>
      <p className={styles.actions}>
            Actions
      </p>
    </div>
  );
};

export default headerList;
