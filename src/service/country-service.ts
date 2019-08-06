import Country from '../model/country';

export interface CountryDataJSON {
  alpha3Code: string,
  area: number,
  borders: string[],
  capital: string,
  flag: string,
  name: string,
  population: number,
  region: string,
  subregion: string,
  timezones: string[]
}

export async function getCountries(): Promise<Country[]> {

  const url = `https://restcountries.eu/rest/v2/all`;
  const response = await fetch(url);
  const json: CountryDataJSON[] = await response.json();

  return Country.fromJSON(json.filter(el => !!el.capital));
}