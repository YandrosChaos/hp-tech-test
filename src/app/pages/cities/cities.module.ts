import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemModule } from "@components/item/item.module";
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    ItemModule,
  ],
  providers: [],
})
export class CitiesModule {}
