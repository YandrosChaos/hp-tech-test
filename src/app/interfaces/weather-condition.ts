import { Coordinate } from "./city.interface";
export interface WeatherCondition {
  id: number;
  name: string;
  cod: number;
  dt: number;
  timezone: number;
  visibility: number;
  base: string;

  sys: System;
  clouds: Cloud;
  wind: Wind;
  main: Main;
  weather: Weather[];
  coord: Coordinate;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Cloud {
  all: number;
}

export interface System {
  country: string;
  sunrise: number;
  sunset: number;
}
