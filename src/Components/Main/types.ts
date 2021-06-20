export interface IMainProps {
  classes: { [key: string]: string };
}

export interface IDataState {
  info: IInfoState;
  results: ICardState[];
}

export interface IInfoState {
  count: number;
  next: string | null;
  page: number;
  prev: string | null;
}

export interface ICardState {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;
}
