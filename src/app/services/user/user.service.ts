import { Injectable } from "@angular/core";
import { User } from "@interfaces/user.interface";

const USER_KEY: string = "user";
@Injectable({ providedIn: "root" })
export class UserService {
  public sessionUser: User;

  constructor() {}

  public store(item: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(item));
  }

  public get(): User {
    return JSON.parse(localStorage.getItem(USER_KEY)) as User;
  }
}
