import React from 'react';
import styles from './BoilerTypes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function BoilerTypes ({ setItems, item, setIsAdding }) {
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
          <button ><FontAwesomeIcon icon={faTrash} /></button>
          <button onClick={ () => { setIsAdding(true); } } ><FontAwesomeIcon icon={faEdit} /></button>
        </p>
      </div>
    </div>
  );
}

export default BoilerTypes;
