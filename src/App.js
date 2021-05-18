import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from '~/components/ErrorBoundary';
import { store } from '~/redux/store';
import AppRouter from '~/Router';

export default (
  <Provider store={store}>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </Provider>
);
