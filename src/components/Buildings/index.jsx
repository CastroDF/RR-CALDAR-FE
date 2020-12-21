import React, { useState, useEffect } from 'react';
import './Buildings.module.css';

const Buildings = () => {
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
      {items.map(item => (
        <h1 key=''>
          {item.name}
        </h1>
      ))}
    </div>
  );
};

export default Buildings;
