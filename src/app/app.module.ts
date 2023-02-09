import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "@services/user/user.service";
import { AuthGuard } from "@guards/auth.guard";
import { CityService } from "@services/city/city.service";
import { FavCityService } from "@services/city/fav-city.service";
import { WeatherService } from "@services/weather/weather.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    CityService,
    FavCityService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
