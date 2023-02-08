import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NewUserComponent } from "@modals/new-user/new-user.component";
import { UserService } from "@services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  public get username(): string {
    return this.loginForm.get("username").value;
  }

  public get password(): string {
    return this.loginForm.get("password").value;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly dialog: MatDialog
  ) {}

  public onSignIn(): void {
    if (!this.loginForm.valid) {
      alert("You need the username and password to login!");
      return;
    }

    const storedUser = this.userService.get();
    const isCorrectUser: boolean =
      storedUser.username === this.username &&
      storedUser.password === this.password;

    if (isCorrectUser) {
      this.userService.sessionUser = storedUser;
      this.router.navigate(["/cities"]);
    } else alert("Wrong username or password");
  }

  public onSignUp(): void {
    this.dialog.open(NewUserComponent);
  }
}
