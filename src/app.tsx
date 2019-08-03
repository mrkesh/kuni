import React from 'react';
import { connect } from 'react-redux';
import Country from './model/country';
import Datagrid from './component/datagrid/datagrid';
import { Input } from './component/input/input';

function mapStateToProps(state: any): { countries: Country[] } {
  return {
    countries: state.countries
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    filterCountry: (value: string) => dispatch({ type: 'FILTER_COUNTRIES', filter: value }),
  }
}

const columns = [
  { label: 'Flag', property: 'flag', type: 'image' },
  { label: 'Name', property: 'name' },
  { label: 'Capital City', property: 'capital' },
  { label: 'Population', property: 'population' },
  { label: 'Area', property: 'area' }
];

interface AppProps {
  countries: Country[],
  filterCountry: (value: string) => void
}

class App extends React.Component<AppProps> {

  render() {

    const { countries, filterCountry } = this.props;

    return (
      <main>
        <Input onFilter={filterCountry} />
        <Datagrid 
          rows={countries}
          columns={columns} />
      </main>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);