export interface City {
  id: number;
  name: string;
  stater?: string;
  country: string;
  coord: Coordinate;
}

export interface Coordinate {
  lon: number;
  lat: number;
}
