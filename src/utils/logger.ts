export class Logger {
  // private colors
  private static colors = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    reset: "\x1b[0m",
  };

  public static error(message: any): void {
    console.log(`${this.colors.red}[Error] ${this.colors.reset}`, message);
  }

  public static warn(message: any): void {
    console.log(`${this.colors.yellow}[Warn] ${this.colors.reset}`, message);
  }

  public static info(message: any): void {
    console.log(`${this.colors.blue}[Info] ${this.colors.reset}`, message);
  }

  public static chat(message: any): void {
    console.log(`${this.colors.magenta}[Chat] ${this.colors.reset}`, message);
  }
}
