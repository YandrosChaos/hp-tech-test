import { Component, OnInit } from "@angular/core";
import { City } from "@interfaces/city.interface";
import { FavCityService } from "@services/city/fav-city.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent implements OnInit {
  public favCities$: Observable<City[]>;

  constructor(private readonly favCityService: FavCityService) {}

  ngOnInit(): void {
    this.favCities$ = this.favCityService.getObservable();
  }
}
