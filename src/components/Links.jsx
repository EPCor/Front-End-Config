import React from 'react';
import { Link } from 'react-router-dom';

export default function Links({ routes }) {
  return (
    <ul>
      {routes.map(route => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
}
