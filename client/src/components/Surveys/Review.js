import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './fields';
import { submitSurvey } from '../../actions';

const renderFields = formValues =>
  formFields.map(({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

const SurveyReview = ({
  onPreviousStep,
  formValues,
  submitSurvey,
  history
}) => {
  return (
    <div>
      <h3>Please confirm your entries</h3>
      {renderFields(formValues)}
      <button className="red btn-flat white-text" onClick={onPreviousStep}>
        Cancel
      </button>
      <button
        onClick={submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  formValues: state.form.survey.values
});

const mapDispatchToProps = dispatch => ({
  submitSurvey: (values, history) => () =>
    dispatch(submitSurvey(values, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(SurveyReview)
);
