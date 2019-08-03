import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/root';
import App from './app';
import './index.css';
import { loadCountries } from './store/action/country-actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(loadCountries());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);