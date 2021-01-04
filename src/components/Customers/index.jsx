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
        <p className={styles.nameCustomer}>
         Type
        </p>
        <p className={styles.name2Customer}>
          Address
        </p>
        <p className={styles.emailCustomer}>
          Email
        </p>
        <p className={styles.typeid}>
          Phone
        </p>
        <p className={styles.skillid}>
          City
        </p>
        <p className={styles.hourrate}>
          Country
        </p>
        <p className={styles.lastitems}>
          <button className={styles.btnStyle}><i>x</i></button>
        </p>
      </div>
      <div className={styles.container}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p className={styles.lastitems}>
          <button className={styles.btnStyle}><i>x</i></button>
        </p>
      </div>
    </div>
  );
}

export default Customers;
