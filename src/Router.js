import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '~/pages/home/Home';

const routes = [
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

export default function AppRouter() {
  return (
    <Router>
      <h2>React Engineering Configuration</h2>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <React.Suspense fallback={'loading'}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} {...route.routeProps}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </React.Suspense>
    </Router>
  );
}
