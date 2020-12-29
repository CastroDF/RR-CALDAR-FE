import React from 'react';
import styles from './Customers.module.css';

function Customers ({ setItems, item }) {
  const delCustomers = async () => {
    // const data = await fetch(
    //   `https://rrcaldar.herokuapp.com/technicians/${item.id}`,
    //   { method: 'DELETE' }
    // );
    const change = await fetch('https://git.heroku.com/rr-caldar-customer.git');
    const changes = await change.json();
    console.log(changes);
    setItems(changes);
  };
  return (
    <div>
      <div key={item.id_customer} className={styles.container}>
        <p className={styles.type}>{item.type}</p>
        <p className={styles.lastitems}>
          <button onClick={delCustomers} className={styles.btnStyle}>
            <i className='far fa-trash-alt'></i>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Customers;

// onClick={this.props.delTodo.bind(this, id)}
