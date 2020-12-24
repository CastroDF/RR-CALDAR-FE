import React, { useState, useEffect } from 'react';
import HeaderList from './headerList';
import Techs from './Technicians';
import Adbutton from './addbutton';
import styles from './index.module.css';

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
    <div className={styles.mainColumn}>
      <HeaderList />
      {items.map((item) => (
        <Techs
          key={item.id}
          item={item}
          setItems={setItems} />
      ))}
      <Adbutton />
    </div>
  );
}

export default Technicians;
