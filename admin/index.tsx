import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

ReactDOM.render(
  <BrowserRouter basename="/admin">
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);
