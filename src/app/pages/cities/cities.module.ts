import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemModule } from "@components/item/item.module";
import { NavbarModule } from "@components/navbar/navbar.module";
import { CitiesComponent } from "./cities.component";
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from "@services/weather/weather.service";

const routes: Routes = [
  {
    path: "",
    component: CitiesComponent,
  },
];
@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NavbarModule,
    ItemModule,
  ],
  providers: [WeatherService],
})
export class CitiesModule {}
