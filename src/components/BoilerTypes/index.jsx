import HeaderList from './headerList';
import BoilerType from './BoilerTypes';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { getBoilerTypes } from '../../redux/actions/boilerTypesActions';
import { bindActionCreators } from 'redux';
import React, { useEffect } from 'react';

const BoilerTypes = ({
  isAdding,
  setIsAdding,
  boilerTypes,
  getBoilerT,
  error
}) => {
  useEffect(() => {
    getBoilerT();
  }, []);
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
          {boilerTypes.map((item) => (
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
  return bindActionCreators({
    getBoilerT: getBoilerTypes
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    boilerTypes: state.data.list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
