import { Component, Inject, Input, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { City } from "@interfaces/city.interface";
import { WeatherCondition } from "@interfaces/weather-condition";
import { WeatherService } from "@services/weather/weather.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather-conditions",
  templateUrl: "./weather-conditions.component.html",
  styleUrls: ["./weather-conditions.component.scss"],
})
export class WeatherConditionsComponent implements OnInit, OnDestroy {
  @Input() city: City;

  private subWeather: Subscription;
  public weatherCondition: WeatherCondition;

  constructor(
    private readonly weatherService: WeatherService,
    @Inject(MAT_DIALOG_DATA) private readonly data: City
  ) {}

  ngOnInit(): void {
    this.city = { ...this.data };
    console.log(this.data);
    this.subWeather = this.weatherService
      .getWeather(this.city)
      .subscribe((res: WeatherCondition) => (this.weatherCondition = res));
  }

  ngOnDestroy(): void {
    this.subWeather.unsubscribe();
  }
}
