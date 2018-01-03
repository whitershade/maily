import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './Form';
import SurveyReview from './Review';

class SurveyNew extends PureComponent {
  state = { showSurveyReview: false };

  onNextStep = () => {
    this.setState({ showSurveyReview: true });
  };

  onPreviousStep = () => {
    this.setState({ showSurveyReview: false });
  };

  renderContent() {
    if (this.state.showSurveyReview)
      return <SurveyReview onPreviousStep={this.onPreviousStep} />;

    return <SurveyForm onNextStep={this.onNextStep} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'survey' })(SurveyNew);
