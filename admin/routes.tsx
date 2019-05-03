// import * as React from 'react';
// import { Route, RouteProps } from 'react-router-dom';
// import App from './App';
// import Settings from './Settings';
//
// const routes: RouteWithSubRoutesProps[] = [
//   {
//     path: '/',
//     component: App,
//     exact: true,
//   },
//   {
//     path: '/settings',
//     component: Settings,
//   },
// ];
//
// export interface RouteWithSubRoutesProps extends RouteProps {
//   routes?: RouteWithSubRoutesProps[];
// }
//
// export const Routes = () => (
//   <>
//     {
//       routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))
//     }
//   </>
// );
//
// const RouteWithSubRoutes = (route: RouteWithSubRoutesProps) => (
//   <Route
//     path={route.path}
//     exact={route.strict}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} />
//     )}
//   />
// );
