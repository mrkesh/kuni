import Country from '../model/country';

export async function getCountries(): Promise<Country[]> {

  const url = `https://restcountries.eu/rest/v2/all`;
  const response = await fetch(url);
  const json: any[] = await response.json();

  return Country.fromJSON(json);
}