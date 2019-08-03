import { AnyAction } from "redux";
import Country from '../../model/country';

export default function countryReducer(state: Country[] = [], action: AnyAction) {
  switch (action.type) {
    case "COUNTRIES_LOADED":
      return action.countries;
    default:
      return state;
  }
};