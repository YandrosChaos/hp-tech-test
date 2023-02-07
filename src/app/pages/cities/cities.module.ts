import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarModule } from "@components/navbar/navbar.module";
import { CitiesComponent } from "./cities.component";

const routes: Routes = [
  {
    path: "",
    component: CitiesComponent,
  },
];
@NgModule({
  declarations: [CitiesComponent],
  imports: [RouterModule.forChild(routes), NavbarModule],
  providers: [],
})
export class CitiesModule {}
