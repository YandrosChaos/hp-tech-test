import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@services/user/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NabvarComponent {
  @Output() public searching: EventEmitter<string> = new EventEmitter();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public onSearch(): void {
    this.searching.emit();
  }

  public onLogout(): void {
    this.userService.sessionUser = undefined;
    this.router.navigate(["/login"]);
  }
}
