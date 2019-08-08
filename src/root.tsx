import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Store } from 'redux';
import App from './app';
import CountryDetails from './view/country-details';

interface RootProps {
  store: Store;
}

export default class Root extends React.Component<RootProps> {

  render() {

    let { store } = this.props;

    const data = [
      { label: 'Name', property: 'name' },
      { label: 'Capital', property: 'capital' },
      { label: 'Population', property: 'population' },
      { label: 'Density', property: 'density' },
      { label: 'Area', property: 'area' },
      { label: 'Region', property: 'region' },
    ];

    return (
      <Provider store={store}>
        <Router>
          <Route 
            exact path="/"
            component={App} />
          <Route
            path="/:country"
            render={ (props) => <CountryDetails {...props} data={data}/> } />
        </Router>
      </Provider>
    );
  }

}