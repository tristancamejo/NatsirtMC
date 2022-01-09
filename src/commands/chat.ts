import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";
import { User } from "../utils/user";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; args: string }) {
    if (!User.isAdmin(ctx.user.username)) {
      ctx.user.reply("You are not an admin!");
      return;
    }
    if (ctx.args === null || "") {
      ctx.user.reply("You need to specify something I should say/run!");
      return;
    }
    bot.chat(ctx.args);
    ctx.user.reply(`Running "${ctx.args}"`);
    return;
  }
}
