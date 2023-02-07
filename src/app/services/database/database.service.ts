import { Injectable } from "@angular/core";
import Dexie, { Table } from "dexie";
import { User } from "@interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class DatabaseService extends Dexie {
  public users!: Table<User, number>;

  constructor() {
    super("hp-tech-test");

    this.version(1).stores({
      users: "++id",
    });
    console.log("database created");
  }

  public async updateUser(user: User): Promise<number> {
    if (user.id) return await this.users.update(user.id, user);
    else return await this.users.add(user);
  }

  public async deleteUser(user: User): Promise<void> {
    return await this.users.delete(user.id);
  }

  public async userExists(user: User): Promise<boolean> {
    const result = await this.users
      .where({ username: user.username, password: user.password })
      .first();

    if (result) true;
    return false;
  }
}
