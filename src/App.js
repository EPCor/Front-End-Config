import React from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';
import AppRouter from '~/Router';

export default (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
