import React from 'react';
import { Field, Form } from 'react-final-form';

const formCustomer = () => {
  return (
    <Form onSubmit={(formLog) => {
      console.log(formLog);
    }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="id_customer">
            {({ input }) => (
              <input
                placeholder="id_customer"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="type">
            {({ input }) => (
              <input
                placeholder="type"
                type="text"
                {...input}
              />
            )}
          </Field>
          <input className="Address" placeholder="Address" type="text"></input>
          <input className="Email" placeholder="Email" type="email"></input>
          <input placeholder="Phone" type="text"></input>
          <input placeholder="City" type="text"></input>
          <button type="submit">Add</button>
        </form>
      )}
    </Form>
  );
};

export default formCustomer;
