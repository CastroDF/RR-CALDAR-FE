import React from 'react';
import styles from './BoilerTypes.module.css';

function BoilerTypes ({ setItems, item }) {
  const deleteBoilertype =
        async () => {
          const data = await fetch(`https://radiumrocket-caldar.herokuapp.com/boiler-types/${item.id}`, { method: 'DELETE' }
          );
          const cambio = await fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types');
          const cambios = await cambio.json();
          console.log(cambios);
          setItems(cambios);
          console.log(data);
        };
  return (
    <div>
      <div key={item.id} className={styles.container}>
        <p className={styles.idtech}>
          {item.id}
        </p>
        <p className={styles.skillid}>
          {item.skillId}
        </p>
        <p className={styles.name2tech}>
          {item.description}
        </p>
        <p className={styles.emailtech}>
          {item.stock}
        </p>
        <p className={styles.lastitems}>
          <button onClick={deleteBoilertype} className={styles.btnStyle}><i className="far fa-trash-alt"></i></button>
        </p>
      </div>
    </div>
  );
}

export default BoilerTypes;
