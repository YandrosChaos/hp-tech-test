import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { Routes, RouterModule } from "@angular/router";
import { NewUserModule } from "@modals/new-user/new-user.module";
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NewUserModule,
    MatDialogModule,
  ],
  providers: [],
})
export class LoginModule {}
