import React, { useState } from 'react';
import HeaderList from './headerList';
import BoilerType from './BoilerTypes';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { deleteBoilerTypeAction, fetchData } from '../../redux/actions/boilerTypesActions';

const BoilerTypes = ({
  data,
  receivePosts
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [datos] = useState(receivePosts.data);
  console.log(datos);
  if (isAdding) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '100%' }}>
        <h2 style={{ color: '#00f3' }}> Add Boiler Type</h2>
        <form onSubmit={ () => { setIsAdding(false); } } style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div>
            <input type="text" name="id" placeholder="Id" />
          </div>
          <div>
            <input type="text" name="skillsId" placeholder="skillsId" />
          </div>
          <div>
            <input type="text" name="description" placeholder="Description"/>
          </div>
          <div>
            <input type="number" name="stock" placeholder="stock" />
          </div>
          <div>
            <button type="submit" color="success" className="btn"><FontAwesomeIcon icon={faAd} /></button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <button onClick={ () => { setIsAdding(true); } } ><FontAwesomeIcon icon={faAd} /></button>
          <h2 style={{ color: '#00f3' }}>Boiler Types</h2>
        </div>
        <div className={styles.mainColumn}>
          <HeaderList />
          {data.map((item) => (
            <BoilerType
              key={item.id}
              item={item}
              setIsAdding={setIsAdding}/>
          ))}
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    receivePosts: () => dispatch(fetchData()),
    deleteBoilerType: (id) => dispatch(deleteBoilerTypeAction(id))
  };
};

const mapStateToProps = (state) => {
  return { data: state.data.data };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
