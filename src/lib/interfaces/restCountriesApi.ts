export interface RestCountriesApiResponse {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  [key: string]: Demonym;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Gini {
  [key: string]: number;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  [key: string]: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: Translation;
}

export interface Translation {
  official: string;
  common: string;
}
