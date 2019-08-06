import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import Country from './model/country';
import { Link } from 'react-router-dom';

interface DetailsProps {
  match: match< { [country: string]: string }>,
  countries: Country[],
}

function mapStateToProps(state: any): { countries: Country[] } {
  return {
    countries: state.countries
  };
};

class CountryDetails extends React.Component<DetailsProps> {

  render() {

    let { countries, match } = this.props;
    let countryParam = match.params.country;

    let activeCountry: Country | undefined = countries.find(country => {
      return country.id === countryParam;
    });

    if (!activeCountry) {
      return <p>No Match</p>
    }

    let previousLink = countries[countries.indexOf(activeCountry) - 1].id;
    let nextLink = countries[countries.indexOf(activeCountry) - 1].id;

    return (
      <div>
        <img src={activeCountry.flag} width={80} />
        <p><strong>Name: </strong>{activeCountry.name}</p>
        <p><strong>Capital: </strong>{activeCountry.capital}</p>
        <p><strong>Population: </strong>{activeCountry.population}</p>
        <p><strong>Area: </strong>{activeCountry.area}</p>
        <p><strong>Region: </strong>{activeCountry.region}</p>

        <Link to={`/${previousLink}`}>
          <button disabled={false}>Previous</button>
        </Link>
        <Link to={`/${nextLink}`}>
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CountryDetails);