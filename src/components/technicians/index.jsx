import React, { useState, useEffect } from 'react';
import HeaderList from './headerList.jsx';
import Techs from './Technicians';
import Addbutton from './addbutton.jsx';
import styles from './index.module.css';
// import { connect } from 'react-redux';

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
      <Addbutton />
    </div>
  );
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     passId: (id) => dispatch(passIDS(id))
//   };
// };

// const mapStateProps = state => {
//   return {
//     items: state.items.list
//   };
// };

// export default connect(mapStateProps, mapDispachToProps)(Technicians);
export default Technicians;
