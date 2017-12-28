import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../Surveys/New';
import * as actions from '../../actions';

const NoPage = () => <h2>404</h2>;

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/surveys" component={Dashboard} />
            <Route exact path="/" component={Landing} />
            <Route component={NoPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
