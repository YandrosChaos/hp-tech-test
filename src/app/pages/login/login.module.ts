import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { Routes, RouterModule } from "@angular/router";
import { NewUserModule } from "@modals/new-user/new-user.module";
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes), NewUserModule, MatDialogModule],
  providers: [],
})
export class LoginModule {}
