import { Injectable } from "@angular/core";
import { City } from "@interfaces/city.interface";
import data from "@assets/cities.json";

@Injectable({
  providedIn: "root",
})
export class CityService {
  private readonly cities: City[] = data;

  constructor() {}

  public getAll(): City[] {
    return this.cities;
  }

  public get(id: number): City {
    return this.cities.find((c) => c.id === id);
  }
}
