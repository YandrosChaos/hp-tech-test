import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "@interfaces/user.interface";
import { DatabaseService } from "@services/database/database.service";
import { liveQuery, Observable } from "dexie";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly databaseService: DatabaseService
  ) {}

  public async onSignIn(): Promise<void> {
    await this.databaseService.updateUser({
      username: "root",
      password: "root",
    });
    await this.databaseService
      .userExists({ username: "root", password: "root" })
      .then((response: boolean) => {
        if (response) this.router.navigate(["/cities"]);
        else alert("Wrong username or password");
      });
  }

  public onSignUp(): void {}
}
