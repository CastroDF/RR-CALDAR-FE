import React from 'react';
import styles from './Technicians.module.css';
function Technicians ({ setItems, item }) {
  const deleteTechnician =
        async () => {
          fetch(`https://rrcaldar.herokuapp.com/technicians/${item.id}`
            , { method: 'DELETE' }
          );
          const cambio = await fetch('https://rrcaldar.herokuapp.com/technicians');
          const cambios = await cambio.json();
          console.log(cambios);
          setItems(cambios);
        };
  return (
    <div>
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
        <p className={styles.lastitems}>
          <button onClick={deleteTechnician} className={styles.btnStyle}><i className="far fa-trash-alt"></i></button>
        </p>
      </div>
    </div>
  );
}

export default Technicians;

// onClick={this.props.delTodo.bind(this, id)}
