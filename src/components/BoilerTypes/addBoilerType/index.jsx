import React from 'react';
import './addBoilerTypes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';

const addBoilerType = () => (
  <div className="container">
    <h2> Add Boiler Type</h2>
    <form >
      <input type="text" name="id" placeholder="Id" />
      <input type="text" name="skillsId" placeholder="skillsId" />
      <input type="text" name="description" placeholder="Description"/>
      <input type="number" name="stock" placeholder="stock" />
      <button type="submit" color="success" className="btn"><FontAwesomeIcon icon={faAd} /></button>
    </form>
  </div>
);

export default addBoilerType;
