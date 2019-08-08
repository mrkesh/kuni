import { deburr, lowerCase, round } from 'lodash';
import { CountryDataJSON } from '../service/country-service';

export default class Country {

  id: string;

  name: string;

  area: number;

  capital: string;

  flag: string;

  population: number;

  region: string;

  get density(): number {
    return round(this.population / this.area, 2);
  }

  constructor(id: string, name: string, capital: string, area: number, population: number, region: string, flag: string) {
    this.id = id;
    this.name = name;
    this.capital = capital;
    this.area = area;
    this.population = population;
    this.region = region;
    this.flag = flag;
  }

  static fromJSON(jsonData: CountryDataJSON[]): Country[] {

    return jsonData.map((jsonObj) => {
      return new Country(
        deburr(lowerCase(jsonObj.name)),
        jsonObj.name,
        jsonObj.capital,
        jsonObj.area,
        jsonObj.population,
        jsonObj.region,
        jsonObj.flag
      );
    });
    
  }

}