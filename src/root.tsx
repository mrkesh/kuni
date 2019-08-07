import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Store } from 'redux';
import App from './app';
import CountryDetails from './country-details';

interface RootProps {
  store: Store;
}

export default class Root extends React.Component<RootProps> {

  render() {

    let { store } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/:country" component={CountryDetails} />
        </Router>
      </Provider>
    );
  }

}