import React from 'react';
import { render } from 'react-dom';
import './index.css';
import MapPropsToApp from './MapPropsToApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Store from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Store, composeEnhancers(
  applyMiddleware(thunk)
));

render(
  <Provider store={store}>
    <MapPropsToApp />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();