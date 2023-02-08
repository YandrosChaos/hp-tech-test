import { AbstractObservableService } from "../abstract-observable/abstract-observable.service";
import { City } from "@interfaces/city.interface";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class FavCityService extends AbstractObservableService<City> {}
