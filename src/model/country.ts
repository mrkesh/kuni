import Continent from './continent';

export default class Country {

  name: string;

  area: number;

  capital: string;

  flag: string;

  population: number;

  region: Continent;

  constructor(name: string, capital: string, area: number, population: number, region: Continent, flag: string) {
    this.name = name;
    this.capital = capital;
    this.area = area;
    this.population = population;
    this.region = region;
    this.flag = flag;
  }

  static fromJSON(jsonData: any[]): Country[] {

    let countryList: Country[] = [];

    for (let i = 0; i < jsonData.length; i++) {
      let country = new Country(
        jsonData[i].name,
        jsonData[i].capital,
        jsonData[i].area,
        jsonData[i].population,
        jsonData[i].region,
        jsonData[i].flag
      );

      countryList.push(country);
    }

    return countryList;
  }
}