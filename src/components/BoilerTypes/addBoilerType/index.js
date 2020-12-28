import React, { Component } from 'react';
import './AddBoilerType.css';

function AddBoilerType ({ setItems, item }) {
    const addBoilertype =
          async () => {
            const data = await fetch(`https://radiumrocket-caldar.herokuapp.com/boiler-types/${item.id}`, { method: 'ADD' }
            );
            const cambio = await fetch('https://radiumrocket-caldar.herokuapp.com/boiler-types');
            const cambios = await cambio.json();
            console.log(cambios);
            setItems(cambios);
            console.log(data);
          };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <div>
          <input type="text" name="id" placeholder="Id" readOnly value={this.state.id ? this.state.id : this.props.data.length + 1} />
        </div>
        <div>
          <input type="text" name="skillsId" value={this.state.skillsId ? this.state.skillsId : ''} placeholder="skillsId" onChange={this.handleChange} />
        </div>
        <div>
          <input type="text" name="description" value={this.state.description ? this.state.description : ''} defaultvalue="" placeholder="Description" onChange={this.handleChange} />
        </div>
        <div>
          <input type="number" name="stock" value={this.state.stock ? this.state.stock : ''} placeholder="stock" onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit" color="success" className="btn">{(this.props.form.id) ? 'Save' : 'Add'}</button>
        </div>
      </form>
    );
  }


export default AddBoilerType;
