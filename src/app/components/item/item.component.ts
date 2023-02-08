import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { City } from "@interfaces/city.interface";
import { UserService } from "@services/user/user.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() city: City;

  constructor() {}

  public onClick(): void {}

  public onDelete(): void {}
}
