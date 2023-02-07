import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class LoginModule {}
