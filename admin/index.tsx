import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { routes, RouteWithSubRoutesProps } from './routes';

ReactDOM.render(
  <BrowserRouter basename="/admin">
    <App />
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </BrowserRouter>,
  document.getElementById('root'),
);

const RouteWithSubRoutes = (route: RouteWithSubRoutesProps) => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
