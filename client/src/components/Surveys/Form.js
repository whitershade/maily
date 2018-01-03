import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './Field';
import formFields from './fields';
import invalidEmails from '../../utils/validateEmails';

class SurveyForm extends PureComponent {
  renderFields() {
    return formFields.map(({ label, name }) => (
      <Field
        key={name}
        name={name}
        type="text"
        label={label}
        component={SurveyField}
      />
    ));
  }

  render() {
    const { handleSubmit, onNextStep } = this.props;

    return (
      <form onSubmit={handleSubmit(onNextStep)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = invalidEmails(values.recipients);

  formFields.forEach(({ name }) => {
    if (!values[name]) errors[name] = `You should provide a ${name}`;
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'survey',
  destroyOnUnmount: false
})(SurveyForm);
