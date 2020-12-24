import React, { useState, useEffect } from 'react';
import styles from './Technicians.module.css';

function Technicians () {
  useEffect(() => {
    fechItems();
  }, []);

  const [items, setItems] = useState([]);

  const fechItems = async () => {
    const data = await fetch('https://rrcaldar.herokuapp.com/technicians');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      {items.map(item => (
        <div key={item.id} className={styles.container}>
          <p className={styles.idtech}>
            { item.id }
          </p>
          <p className={styles.nametec}>
            { item.first_name }
          </p>
          <p className={styles.name2tech}>
            { item.last_name }
          </p>
          <p className={styles.emailtech}>
            { item.email }
          </p>
          <p className={styles.typeid}>
            { item.typeIds }
          </p>
          <p className={styles.skillid}>
            { item.skillsId }
          </p>
          <p className={styles.hourrate}>
            { item.hour_rate }
          </p>
          <p className={styles.dailycap}>
            { item.daily_capacity }
          </p>
          <p className={styles.dateStyle}>
            { item.updatedAt.slice(0, 10) }
          </p>
        </div>
      ))

      }
    </div>
  );
}

export default Technicians;
