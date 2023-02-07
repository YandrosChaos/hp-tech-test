import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CitiesComponent } from "./cities.component";

const routes: Routes = [
  {
    path: "",
    component: CitiesComponent,
  },
];
@NgModule({
  declarations: [CitiesComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class CitiesModule {}
