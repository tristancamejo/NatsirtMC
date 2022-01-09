import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";
import { User } from "../utils/user";
import pathfinder from "mineflayer-pathfinder";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; args: string }) {
    if (!User.isAdmin(ctx.user.username)) {
      ctx.user.reply("You are not an admin!");
      return;
    }

    const mcData = require("minecraft-data")(bot.version);
    const defaultMove = new pathfinder.Movements(bot, mcData);

    const username = ctx.args;
    const target = bot.players[username] ? bot.players[username].entity : null;
    if (!target) {
      ctx.user.reply(`Could not find player ${username} near me!`);
      return;
    }
    const p = target.position;
    bot.pathfinder.setMovements(defaultMove);

    bot.pathfinder.setGoal(new pathfinder.goals.GoalNear(p.x, p.y, p.z, 1));
    ctx.user.reply(`Following ${username}`);
    return;
  }
}
