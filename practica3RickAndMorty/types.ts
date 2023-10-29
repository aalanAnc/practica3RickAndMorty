// Definicion de types, tanto origin, Location, Episode y Character

type Origin = {
  name: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

type Episode = {
  created: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  created: Episode;
};
