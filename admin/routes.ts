import { RouteProps } from 'react-router-dom';
import App from './App';
import Settings from './Settings';

export interface RouteWithSubRoutesProps extends RouteProps {
  routes?: RouteWithSubRoutesProps[];
}

export const routes: RouteWithSubRoutesProps[] = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/settings',
    component: Settings,
  },
];
