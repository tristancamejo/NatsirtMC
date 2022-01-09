import { Bot } from "mineflayer";
import pathfinder from "mineflayer-pathfinder";
import { autoEater } from "..";

export class kFollow {
  public active: boolean = false;
  public user: string | null = null;

  constructor(bot: Bot) {
    setInterval(() => {
      if (autoEater.eating) return;
      if (!this.active) return;
      if (this.user == null) return;

      const mcData = require("minecraft-data")(bot.version);
      const defaultMove = new pathfinder.Movements(bot, mcData);

      const username = this.user;
      const target = bot.players[username]
        ? bot.players[username].entity
        : null;
      if (!target) {
        return;
      }
      const p = target.position;
      bot.pathfinder.setMovements(defaultMove);

      bot.pathfinder.setGoal(new pathfinder.goals.GoalNear(p.x, p.y, p.z, 1));
    }, 150);
  }
}
