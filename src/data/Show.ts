export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: null;
  averageRuntime: number;
  premiered: Date;
  ended: Date;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: null;
  webChannel: WebChannel;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Previousepisode;
  previousepisode?: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Externals {
  tvrage: null;
  thetvdb: null;
  imdb: null;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average: null;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}
