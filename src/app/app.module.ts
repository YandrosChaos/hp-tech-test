import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "@services/user/user.service";
import { AuthGuard } from "@guards/auth.guard";
import { CityService } from "@services/city/city.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [UserService, CityService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
