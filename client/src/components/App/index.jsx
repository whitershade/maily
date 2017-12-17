import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const NoPage = () => <h2>404</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
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
};

export default App;
