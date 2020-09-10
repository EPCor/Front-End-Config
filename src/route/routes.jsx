import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~/pages/home/Home';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    routeProps: {
      exact: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: React.lazy(() => import('~/pages/about/About')),
  },
];

export default function AppRoutes() {
  return (
    <React.Suspense fallback={'loading'}>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} {...route.routeProps}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </React.Suspense>
  );
}
