import React, { useEffect, useState } from 'react';
import style from './Addform.module.css';

const Addform = () => {
  useEffect(() => {
    // resetinputs();
  }, []);
  const [Technician, setTechnician] = useState({});
  const sendTechnician = (e) => {
    e.preventDefault();
    console.log('entra al submit');
    console.log('id:', Technician.id);
    const Inputs = async () => {
      fetch('https://rrcaldar.herokuapp.com/technicians'
        , {
          method: 'POST',
          body: JSON.stringify({
            id: Technician.id,
            first_name: Technician.first_name,
            last_name: Technician.last_name,
            email: Technician.email,
            typeIds: Technician.typeIds,
            skillsId: Technician.skillsId,
            hour_rate: Technician.hour_rate,
            daily_capacity: Technician.daily_capacity
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        });
      // eslint-disable-next-line no-unused-vars
      console.log('lo q manda', Inputs);
    };
  };
  const handleUpdate = (todo) => {
    setTechnician({ ...Technician, [todo.target.name]: todo.target.value });
    console.log('todo', todo);
  };
  const passValue = (e) => {
    handleUpdate(e);
  };
  console.log(Technician);
  return (
    <div>
      <form className = {style.techform} onSubmit={sendTechnician} >
        <div className ={style.cage}>
          <h2>Id:</h2>
          <input
            type="number"
            name="id"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Id"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>First Name:</h2>
          <input
            type="text"
            name="first_name"
            style={{ flex: '2', padding: '5px' }}
            placeholder="First Name"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Last name:</h2>
          <input
            type="text"
            name="last_name"
            style={{ flex: '2', padding: '5px' }}
            placeholder="First Name"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Email:</h2>
          <input
            type="text"
            name="email"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Email"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Type Ids:</h2>
          <input
            type="string"
            name="typeIds"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Type Ids"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Skills Id:</h2>
          <input
            type="strig"
            name="skillsId"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Skills Id"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Hour rate:</h2>
          <input
            type="text"
            name="hour_rate"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Hour rate"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage}>
          <h2>Daily capacity:</h2>
          <input
            type="number"
            name="daily_capacity"
            style={{ flex: '2', padding: '5px' }}
            placeholder="Daily capacity"
            onChange={passValue}
          />
        </div>
        <div className = {style.cage} >
          <input
            type="submit"
            value="Submit"
            className={style.btn}
          />
        </div>
      </form>
    </div>
  );
};

export default Addform;

// onSubmit={this.onSubmit} className = "techform"
