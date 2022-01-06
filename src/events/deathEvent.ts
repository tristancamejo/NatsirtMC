import { Bot, Player } from "mineflayer";
import { Logger } from "../utils/logger";
const playerDeathEvent = require("mineflayer-death-event");

export class deathEvent {
  constructor(bot: Bot) {
    bot.loadPlugin(playerDeathEvent);
    // @ts-ignore
    bot.on("playerDeath", (data) => {
      if (data.victim.detail != null) {
        const player: Player = data.victim.detail;
        Logger.info(
          `You were killed by a player with the username of ${player.username}`
        );
        return;
      }

      Logger.info(`You were killed by ${data}`);
    });
  }
}
