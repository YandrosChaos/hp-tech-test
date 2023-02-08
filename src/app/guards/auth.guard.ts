import { CanActivate, Router } from "@angular/router";
import { User } from "@interfaces/user.interface";
import { UserService } from "@services/user/user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    const sessionUser: User = this.userService.sessionUser;
    const storedUser: User = this.userService.get();

    if (
      sessionUser?.username === storedUser?.username &&
      sessionUser?.password === storedUser?.password
    )
      return true;

    alert("Unauthorized!");
    this.router.navigate(["/login"]);
    return false;
  }
}
