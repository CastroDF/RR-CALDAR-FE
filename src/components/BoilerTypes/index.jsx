import HeaderList from './headerList';
import BoilerType from './BoilerTypes';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { getBoilerTypes } from '../../redux/BoilerTypes/boilerTypesActions';
import { bindActionCreators } from 'redux';
import React, { useEffect } from 'react';
import Button from '../Shared/AddButton';
import addBoilerType from './addBoilerType';

const BoilerTypes = ({
  isAdding,
  boilerTypes,
  getBoilerT,
  error
}) => {
  useEffect(() => {
    getBoilerT();
  }, []);
  if (isAdding) {
    <addBoilerType></addBoilerType>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Button></Button>
          <h2>Boiler Types</h2>
        </div>
        <div className={styles.mainColumn}>
          <HeaderList />
          {boilerTypes.map((item) => (
            <BoilerType key={item.id} item={item} />
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
    boilerTypes: state.data.list,
    isAdding: state.data.isAdding
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
