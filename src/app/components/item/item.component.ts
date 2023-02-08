import { Component, Input } from "@angular/core";
import { City } from "@interfaces/city.interface";
import { FavCityService } from "@services/city/fav-city.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() city: City;

  constructor(private readonly favCityService: FavCityService) {}

  public onClick(): void {}

  public onDelete(): void {
    this.favCityService.deleteOne(this.city, "id");
  }
}
