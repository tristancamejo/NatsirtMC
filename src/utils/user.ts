export class User {
  // private colors
  private static Admins = ["twisttaan", "joex92"];

  public static isAdmin(username: string): boolean {
    return this.Admins.includes(username);
  }
}
