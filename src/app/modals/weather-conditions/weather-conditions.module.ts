import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { WeatherConditionsComponent } from "./weather-conditions.component";
import { WeatherService } from "@services/weather/weather.service";

@NgModule({
  declarations: [WeatherConditionsComponent],
  exports: [WeatherConditionsComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  providers: [WeatherService],
})
export class WeatherConditionModule {}
