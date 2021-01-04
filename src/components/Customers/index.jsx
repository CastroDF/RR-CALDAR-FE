import React from 'react';
import styles from '../Customers/Customers.module.css';
import Form from './Forms/form';

// const MongoClient = require('mongodb').MongoClient;
// const uri = 'mongodb+srv://customers2020:customers2020@caldar2020.r3nxg.mongodb.net/Customers?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(() => {
//   // perform actions on the collection object
//   client.close();
// });

function Customers ({ setItems, item }) {
  return (
    <div>
      <h1>Customers List</h1>
      <div className={styles.fill}><Form></Form></div>
      <div className={styles.container}>
        <p className={styles.id_Customer}>
          ID
        </p>
        <p className={styles.type}>
         Type
        </p>
        <p className={styles.address}>
          Address
        </p>
        <p className={styles.email}>
          Email
        </p>
        <p className={styles.phone}>
          Phone
        </p>
        <p className={styles.city}>
          City
        </p>
        <p>
          <button className={styles.delBtn}><i>x</i></button>
        </p>
      </div>
      <div className={styles.container}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default Customers;
