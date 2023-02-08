import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { City } from "@interfaces/city.interface";
import { CityService } from "@services/city/city.service";
import { FavCityService } from "@services/city/fav-city.service";
import { map, Observable, of, startWith } from "rxjs";

@Component({
  selector: "app-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrls: ["./typeahead.component.scss"],
})
export class TypeaheadComponent implements OnInit {
  public formControl = new FormControl();
  public availableCities: City[];
  public filteredCities: Observable<City[]>;

  constructor(
    private readonly cityService: CityService,
    private readonly favCityService: FavCityService
  ) {}

  ngOnInit(): void {
    this.availableCities = this.cityService.getAll();
    this.filteredCities = this.formControl.valueChanges.pipe(
      startWith(""),
      map((value) => this.filter(value))
    );
  }

  public likedCity(): void {
    const foundedCity = this.availableCities.find(
      (c) => c.name === this.formControl.value
    );
    if (foundedCity) {
      this.favCityService.updateOne(foundedCity, "id");
    } else {
      alert("City not found");
    }
  }

  private filter(value: string): City[] {
    const filterVal = this.normalizeValue(value);
    return this.availableCities.filter((city) =>
      this.normalizeValue(city.name).includes(filterVal)
    );
  }

  private normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, "");
  }
}
