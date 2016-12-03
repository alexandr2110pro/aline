import React from 'react';

import { render } from 'react-dom';

import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import RootComponent from './components/Root';
import app from './reducers';

import 'bootstrap/less/bootstrap.less';

const store = createStore(
  app,
  applyMiddleware(thunkMiddleware, createLogger())
);

render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById('root')
);

