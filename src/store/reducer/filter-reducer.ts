import { AnyAction } from "redux";

export default function filterReducer(state: string | null = null, action: AnyAction) {
  switch (action.type) {
    case "FILTER_COUNTRIES":
      return action.filter;
    default:
      return state;
  }
};