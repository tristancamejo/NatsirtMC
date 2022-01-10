import config from "../config";

export class User {
  private static Admins = config.admins;

  public static isAdmin(username: string): boolean {
    return this.Admins.includes(username);
  }
}
