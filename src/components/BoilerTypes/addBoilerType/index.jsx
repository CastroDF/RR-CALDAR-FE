import React from 'react';
import './addBoilerTypes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { Form, Field } from 'react-final-form';
import textInput from '../inputComponent';

const addBoilerType = (props) => {
  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <h2> Add Boiler Type</h2>
      <Form
        onSubmit = {onSubmitForm}
        initialValues = {{ id: '', skillId: '', description: '', stock: '' }}
        validate = { values => {
          const errors = {};

          if (!values.skillId) {
            errors.skillId = 'Required';
          }

          if (!values.description) {
            errors.description = 'Required';
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, prestine, values }) => (
          <form onSubmit={{ handleSubmit }}>
            <Field
              component={textInput}
              type="text"
              name="id"
              placeholder="Id">
            </Field>
            <Field
              component={textInput}
              type="text"
              name="skillsId"
              placeholder="skillsId">
            </Field>
            <Field
              component={textInput}
              type="text"
              name="description"
              placeholder="Description">
            </Field>
            <Field
              component={textInput}
              type="number"
              name="stock"
              placeholder="stock" >
            </Field>
            <Field
              component="button"
              type="submit"
              color="success"
              disabled={ submitting || prestine }
              className="btn"><FontAwesomeIcon icon={faAd} /> </Field>
          </form>
        )} >
      </Form>
    </div>
  );
};

export default addBoilerType;
