import { deburr, lowerCase } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Country from './model/country';
import Datagrid from './component/datagrid/datagrid';
import List from './component/list/list';
import { Input } from './component/input/input';
import { filterCountry } from './store/action/country-actions';

function mapStateToProps(state: any): { countries: Country[], textFilter: string } {
  return {
    countries: state.countries,
    textFilter: state.filter
  };
};

const mapDispatchToProps = {
  filterCountry
};

const columns = [
  { label: 'Flag', property: 'flag', type: 'image' },
  { label: 'Name', property: 'name' },
  { label: 'Capital City', property: 'capital' },
  { label: 'Population', property: 'population' },
  { label: 'Area', property: 'area' }
];

interface AppProps {
  countries: Country[],
  textFilter: string | null,
  filterCountry: (value: string | null) => void
}

class App extends React.Component<AppProps> {

  render() {

    const { countries, textFilter, filterCountry } = this.props;
    const data = textFilter ? countries.filter((country: Country) => lowerCase(deburr(country.name)).startsWith(lowerCase(textFilter))) : countries;  

    return (
      <main>
        
          <Input onFilter={filterCountry} />
          <List data={data} />
        
        {/* <Datagrid 
          rows={data}
          columns={columns} /> */}
      </main>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);