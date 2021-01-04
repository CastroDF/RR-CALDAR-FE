import React from 'react';
import { Field, Form } from 'react-final-form';
// import style from'form.module.css';

const formCustomer = () => {
  return (
    <Form onSubmit={(formLog) => {
      console.log(formLog);
    }}>
      {({ handleSubmit }) => (
        <form /* className={style.form} */ onSubmit={handleSubmit}>
          <Field name="id_customer">
            {({ input }) => (
              <input
                placeholder="ID Customer"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="type">
            {({ input }) => (
              <input
                placeholder="Type"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="address">
            {({ input }) => (
              <input
                placeholder="Address"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="Email"
                type="email"
                {...input}
              />
            )}
          </Field>
          <Field name="phone">
            {({ input }) => (
              <input
                placeholder="Phone Number"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="city">
            {({ input }) => (
              <input
                placeholder="City"
                type="text"
                {...input}
              />
            )}
          </Field>
          <button type="submit">Add</button>
        </form>
      )}
    </Form>
  );
};

export default formCustomer;
