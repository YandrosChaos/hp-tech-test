import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
import { User } from "@interfaces/user.interface";
import { UserService } from "@services/user/user.service";
import { MatDialog } from "@angular/material/dialog";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.scss"],
})
export class NewUserComponent {
  public newUserForm: FormGroup = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    repeatedPassword: ["", Validators.required],
  });

  public get username(): string {
    return this.newUserForm.get("username").value;
  }

  public get password(): string {
    return this.newUserForm.get("password").value;
  }

  matcher = new MyErrorStateMatcher();

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {}

  public onGoClicked(): void {
    if (this.newUserForm.valid) {
      const newUser: User = {
        username: this.username,
        password: this.password,
      };

      this.userService.store({ ...newUser });
      this.userService.sessionUser = { ...newUser };

      this.router.navigate(["/cities"]);
      this.dialog.closeAll();
    } else alert("Form not valid!");
  }
}
