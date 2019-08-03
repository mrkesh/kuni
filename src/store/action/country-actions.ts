import Country from '../../model/country';
import { getCountries } from '../../service/country-service';
import { Dispatch } from 'redux';

export function loadCountries(): any {
  return async function(dispatch: Dispatch): Promise<void> {
    const countries = await getCountries();
    dispatch(countriesLoaded(countries));
  };
}

export function countriesLoaded(countries: Country[]) {
  return { type: 'COUNTRIES_LOADED', countries };
}