import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";

export class errorEvent {
  constructor(bot: Bot) {
    bot.on("error", (error) => {
      Logger.error(error);
    });
  }
}
