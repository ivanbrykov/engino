import * as React from 'react';
import ReactDOM from 'react-dom';
// import { Routes } from './routes';
import { Router } from '@reach/router';
import App from './App';
import Settings from './Settings';

ReactDOM.render(
  <Router basepath="/admin">
    <App path="/" />
    <Settings path="settings" />
  </Router>,
  document.getElementById('root'),
);
