export interface IHeroResponse {
  count: number;
  next: string;
  previous: null;
  results: Hero[];
}

export interface Hero {
  name: string;
  url: string;
}

export interface IHeroDetailResponse {
  descriptions: IDescription[];
  id: number;
  is_main_series: boolean;
  name: string;
}

export interface IDescription {
  description: string;
  language: ILanguage;
}

export interface ILanguage {
  name: string;
  url: string;
}
