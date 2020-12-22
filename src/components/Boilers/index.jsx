import React, { useEffect, useState } from 'react';
import './Boilers.module.css';

const Boilers = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('https://swapi.dev/api/vehicles');
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  return (
    <div>
      <h1 style={ { color: '#00f3' } }>Boilers</h1>
      <div>
        {items.map(item => (
          <h1 key=''>
            {item.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Boilers;
