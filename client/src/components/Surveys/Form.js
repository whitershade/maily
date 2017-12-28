import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './Field';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends PureComponent {
  renderFields() {
    return FIELDS.map(({ label, name }) => (
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
    return (
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'survey' })(SurveyForm);
