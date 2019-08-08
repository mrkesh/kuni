import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import Country from '../model/country';
import { Link } from 'react-router-dom';

interface DetailsProps {
  match: match<{ [country: string]: string }>;
  countries: Country[];
  data: { label: string, property: keyof Country }[];
}

function mapStateToProps(state: { countries: Country[] }): { countries: Country[] } {
  return {
    countries: state.countries
  };
}

class CountryDetails extends React.Component<DetailsProps> {

  render() {

    const { countries, data, match } = this.props;
    let countryParam = match.params.country;

    let activeCountry: Country | undefined = countries.find(country => {
      return country.id === countryParam;
    });

    if (!activeCountry) {
      return <p>No Match</p>;
    }

    const currentIndex = countries.indexOf(activeCountry);
    let previousLink = countries[currentIndex > 0 ? currentIndex - 1 : countries.length - 1].id;
    let nextLink = countries[currentIndex < countries.length - 1 ?  currentIndex + 1 : 0 ].id;

    return (
      <div>
        <img src={activeCountry.flag} height={64} />
        {
          data.map((element, index) => {
            return <p key={index}><strong>{`${element.label}: `}</strong>{activeCountry[element.property]}</p>;
          })
        }
        <Link to={`/${previousLink}`}>
          <button disabled={false}>Previous</button>
        </Link>
        <Link to={`/${nextLink}`}>
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CountryDetails);