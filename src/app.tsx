import { lowerCase } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Country from './model/country';
import List from './component/list/list';
import { Input } from './component/input/input';
import { filterCountry } from './store/action/country-actions';

function mapStateToProps(state: any): { countries: Country[], textFilter: string | null } {
  return {
    countries: state.countries,
    textFilter: state.filter
  };
};

const mapDispatchToProps = {
  filterCountry
};

interface AppProps {
  countries: Country[],
  textFilter: string | null,
  filterCountry: (value: string | null) => void
}

class App extends React.Component<AppProps> {

  render() {

    const { countries, textFilter, filterCountry } = this.props;
    const data = textFilter ? countries.filter((country: Country) => country.id.startsWith(lowerCase(textFilter))) : countries;  

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