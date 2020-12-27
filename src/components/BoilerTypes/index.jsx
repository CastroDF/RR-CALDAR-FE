import React, { useState, useEffect } from 'react';
import HeaderList from './headerList';
import BoilerType from './BoilerTypes';
import Adbutton from './addbutton';
import styles from './index.module.css';

function BoilerTypes () {
  useEffect(() => {
    fechItems();
  }, []);

  const [items, setItems] = useState([]);
  const fechItems = async () => {
    const data = await fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types');
    const items = await data.json();
    console.log(items);
    console.log(data);
    setItems(items);
  };

  return (
    <div>
      <h1 style={{ color: '#00f3' }}>Boiler Types</h1>
      <div className={styles.mainColumn}>
        <HeaderList />
        {items.map((item) => (
          <BoilerType
            key={item.id}
            item={item}
            setItems={setItems} />
        ))}
        <Adbutton onClick="" />
      </div>
    </div>
  );
}

export default BoilerTypes;
