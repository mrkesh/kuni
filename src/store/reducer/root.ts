import { combineReducers } from 'redux';
import countries from './country-reducer';
import filter from './filter-reducer';

export default combineReducers({
  countries,
  filter
});