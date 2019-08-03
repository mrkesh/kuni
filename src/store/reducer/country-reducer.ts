import { deburr, lowerCase } from 'lodash';
import { AnyAction } from "redux";
import Country from '../../model/country';

let allCountries: Country[] = [];

export default function countries(state: any = [], action: AnyAction) {
  switch (action.type) {
    case "COUNTRIES_LOADED":
      allCountries = action.countries;
      return action.countries;
    case "FILTER_COUNTRIES":
      debugger;
      return allCountries.filter((country: Country) => lowerCase(deburr(country.name)).startsWith(action.filter.toLowerCase()));  
    default:
      return state;
  }
};