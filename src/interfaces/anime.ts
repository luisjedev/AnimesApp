export type Anime = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: any[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: any[];
  demographics: Demographic[];
  relations?: Relation[];
  theme?: Theme;
  external?: External[];
  streaming?: External[];
};

export type Aired = {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
};

export type Prop = {
  from: From;
  to: From;
};

export type From = {
  day: number;
  month: number;
  year: number;
};

export type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

export type Demographic = {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
};

export enum Type {
  Anime = "anime",
}

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Title = {
  type: string;
  title: string;
};

export type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
};

export type Images = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};

export type Relation = {
  relation: string;
  entry: Genre[];
};

export type Theme = {
  openings: string[];
  endings: string[];
};

export type Genre = {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
};
