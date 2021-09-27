import { AnyAction } from "redux";
import { CountryAction } from "../action/country-actions";

export default function filterReducer(state: string | null = null, action: AnyAction): string | null {
  switch (action.type) {
    case CountryAction.FILTER_COUNTRIES:
      return action.filter;
    default:
      return state;
  }
}