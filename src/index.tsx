import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/root';
import Root from './root';
import './index.css';
import { loadCountries } from './store/action/country-actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(loadCountries());

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

