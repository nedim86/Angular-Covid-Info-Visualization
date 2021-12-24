export interface DrzavaModel {
  alpha2Code: string;
  alpha3Code: string;
  cca2: string;
  cca3: string;
  area: number;
  capital: string[];
  flags: Flag;
  name: Name;
  population: number;
  region: string;
  subregion: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  borders: string[];
  languages: string[];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Name {
  common: string;
  official: string;
}

export interface Flag {
  png: string;
  svg: string;
}

