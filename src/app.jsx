import React from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';
import AppRouter from '~/route/Router';

export default (
  <Provider store={store}>
    <h2>React Engineering Configuration</h2>
    <AppRouter />
  </Provider>
);
