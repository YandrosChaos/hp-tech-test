import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NabvarComponent {
  @Output() public searching: EventEmitter<string> = new EventEmitter();

  constructor(private readonly router: Router) {}

  public onSearch(): void {
    this.searching.emit();
  }

  public onLogout(): void {
    this.router.navigate(["/login"]);
  }
}
