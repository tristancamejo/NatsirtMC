import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";

export class ChatEvent {
  constructor(bot: Bot) {
    bot.on("chat", (username, message) => {
      if (username === bot.username) return;
      Logger.chat(`${username}: ${message}`);
    });
    bot.chatAddPattern(
      /twisttaan has requested to teleport to you\./i,
      "tristanreq"
    );
    // @ts-expect-error
    bot.on("tristanreq", function () {
      bot.chat("/tpaccept");
    });
  }
}
