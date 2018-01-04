import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from '../Surveys/List';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <SurveyList />
    <div className="fixed-action-btn">
      <Link
        to="/surveys/new"
        className="btn-floating btn-large waves-effect waves-light red"
      >
        <i className="large material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
