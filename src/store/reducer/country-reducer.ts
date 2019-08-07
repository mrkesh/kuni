import { AnyAction } from "redux";
import Country from '../../model/country';
import { CountryAction } from "../action/country-actions";

export default function countryReducer(state: Country[] = [], action: AnyAction): Country[] {
  switch (action.type) {
    case CountryAction.COUNTRIES_LOADED:
      return action.countries;
    default:
      return state;
  }
}