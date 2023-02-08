import { Injectable } from "@angular/core";
import { City } from "@interfaces/city.interface";
import data from "@assets/cities.json";

@Injectable({
  providedIn: "root",
})
export class CityService {
  private readonly cities: City[] = data;
  private likedCities: City[] = [];

  constructor() {}

  public getAll(): City[] {
    return this.cities;
  }

  public get(id: number): City {
    return this.cities.find((c) => c.id === id);
  }

  public addLikedCity(city: City): void {
    const cityIndex: number = this.likedCities.findIndex(
      (c) => c.id === city.id
    );

    if (cityIndex === -1) {
      this.likedCities.push(city);
    } else alert("City included previously.");
  }

  public deleteLikedCity(id: number): void {
    const cityIndex: number = this.likedCities.findIndex((c) => c.id === id);

    if (cityIndex > -1) {
      this.likedCities = this.likedCities.splice(cityIndex, 1);
    }
  }
}
