import { NgModule } from "@angular/core";
import { WeatherConditionModule } from "@modals/weather-conditions/weather-conditions.module";
import { ItemComponent } from "./item.component";

@NgModule({
  declarations: [ItemComponent],
  exports: [ItemComponent],
  imports: [WeatherConditionModule],
  providers: [],
})
export class ItemModule {}
