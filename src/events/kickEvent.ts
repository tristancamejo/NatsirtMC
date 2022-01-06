import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";

export class kickEvent {
  constructor(bot: Bot) {
    bot.on("kicked", (reason) => {
      Logger.warn(`Bot was kicked from the server for\n${reason}`);
      process.exit(1);
    });
  }
}
