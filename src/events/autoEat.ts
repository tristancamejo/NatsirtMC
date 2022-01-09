import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";
const autoeat = require("mineflayer-auto-eat");

export class autoEat {
  public eating: boolean = false;

  constructor(bot: Bot) {
    // Load the plugin
    bot.loadPlugin(autoeat);

    bot.once("spawn", () => {
      // @ts-ignore
      bot.autoEat.options.priority = "foodPoints";
      // @ts-ignore

      bot.autoEat.options.bannedFood = [];
      // @ts-ignore

      bot.autoEat.options.eatingTimeout = 3;
      Logger.info("Started up the auto eat plugin");
    });

    // The bot eats food automatically and emits these events when it starts eating and stops eating.
    // @ts-ignore

    bot.on("autoeat_started", () => {
      Logger.info("Auto Eat started!");
      this.eating = true;
    });
    // @ts-ignore

    bot.on("autoeat_stopped", () => {
      Logger.info("Auto Eat stopped!");
      this.eating = false;
    });

    bot.on("health", () => {
      // @ts-ignore

      if (bot.food === 20) bot.autoEat.disable();
      // Disable the plugin if the bot is at 20 food points
      // @ts-ignore
      else bot.autoEat.enable(); // Else enable the plugin again
    });
  }
}
