import Country from '../../model/country';
import { getCountries } from '../../service/country-service';
import { Dispatch } from 'redux';

export enum CountryAction {
  COUNTRIES_LOADED = 'COUNTRIES_LOADED',
  FILTER_COUNTRIES = 'FILTER_COUNTRIES'
}

export function loadCountries(): (dispatch: Dispatch) => Promise<void> {
  return async function(dispatch: Dispatch): Promise<void> {
    const countries = await getCountries();
    dispatch(countriesLoaded(countries));
  };
}

export function countriesLoaded(countries: Country[]): { type: CountryAction, countries: Country[] } {
  return { type: CountryAction.COUNTRIES_LOADED, countries };
}

export function filterCountry(filter: string | null): { type: CountryAction, filter: string | null } {
  return { type: CountryAction.FILTER_COUNTRIES, filter };
}
