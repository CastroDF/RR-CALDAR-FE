import React, { useState } from 'react';
import MaterialModal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/Modal/modalActions';
import styles from './modal.module.css';
import AddBoilerType from '../../BoilerTypes/AddBoilerType';
import modalTypes from '../../../redux/BoilerTypes/actionsBoilerTypes';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    outline: 0, // Disable browser on-focus borders
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Modal = ({
  show,
  modalType,
  meta,
  closeModal
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  let modalComponent;
  switch (modalType) {
  case modalTypes.ADD_BOILERTYPES:
    modalComponent = <AddBoilerType />;
    break;
  default:
    modalComponent = null;
    break;
  }

  return (
    <MaterialModal
      open={show}
      onClose={closeModal}
      className={styles.fixedLayout}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div style={modalStyle} className={classes.paper }>{{ modalComponent }}</div>
    </MaterialModal>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal: closeModalAction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
