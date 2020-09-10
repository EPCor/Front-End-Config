import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Links from '~/components/Links';
import AppRoutes, { routes } from './routes';

export default function AppRouter() {
  return (
    <Router>
      <Links routes={routes} />
      <AppRoutes />
    </Router>
  );
}
