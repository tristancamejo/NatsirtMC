"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static error(message) {
        console.log(`${this.colors.red}[Error] ${this.colors.reset}`, message);
    }
    static warn(message) {
        console.log(`${this.colors.yellow}[Warn] ${this.colors.reset}`, message);
    }
    static info(message) {
        console.log(`${this.colors.blue}[Info] ${this.colors.reset}`, message);
    }
    static chat(message) {
        console.log(`${this.colors.magenta}[Chat] ${this.colors.reset}`, message);
    }
}
exports.Logger = Logger;
// private colors
Logger.colors = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    reset: "\x1b[0m",
};
