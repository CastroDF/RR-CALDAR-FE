import React from 'react';
import { Field, Form } from 'react-final-form';

const formCustomer = () => {
  return (
    <Form onSubmit={(formLog) => {
      console.log(formLog);
    }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">{({ input }) => <input placeholder="id_customer" type="inter" {...input} />}</Field>
          <input placeholder="Type" type="text"></input>
          <input placeholder="Address" type="text"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Phone" type="text"></input>
          <input placeholder="City" type="text"></input>
          <button type="submit">Add</button>
        </form>
      )}
    </Form>
  );
};

export default formCustomer;
