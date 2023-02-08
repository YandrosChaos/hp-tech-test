import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("@pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "cities",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("@pages/cities/cities.module").then((m) => m.CitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
