import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public onSignIn(): void {
    this.userService.store({
      username: "root",
      password: "root",
    });

    const currentUser = this.userService.get();

    const isCorrectUser: boolean =
      currentUser.username === "root" && currentUser.password === "root";

    if (isCorrectUser) this.router.navigate(["/cities"]);
    else alert("Wrong username or password");
  }

  public onSignUp(): void {}
}
