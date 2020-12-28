import React from 'react';
import styles from './BoilerTypes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function BoilerTypes ({ setItems, item, setIsAdding }) {
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
          {item.skillsId}
        </p>
        <p className={styles.name2tech}>
          {item.description}
        </p>
        <p className={styles.emailtech}>
          {item.stock}
        </p>
        <p className={styles.lastitems}>
          <button onClick={ deleteBoilertype } ><FontAwesomeIcon icon={faTrash} /></button>
          <button onClick={ () => { setIsAdding(true); } } ><FontAwesomeIcon icon={faEdit} /></button>
        </p>
      </div>
    </div>
  );
}

export default BoilerTypes;
