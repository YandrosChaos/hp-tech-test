import { Component, Input } from "@angular/core";
import { City } from "@interfaces/city.interface";
import { FavCityService } from "@services/city/fav-city.service";
import { MatDialog } from "@angular/material/dialog";
import { WeatherConditionsComponent } from "@modals/weather-conditions/weather-conditions.component";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() city: City;

  constructor(
    private readonly favCityService: FavCityService,
    private readonly dialog: MatDialog
  ) {}

  public onClick(): void {
    this.dialog.open(WeatherConditionsComponent, {
      data: { ...this.city },
    });
  }

  public onDelete(): void {
    this.favCityService.deleteOne(this.city, "id");
  }
}
