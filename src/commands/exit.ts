import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";
import { User } from "../utils/user";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; message: string }) {
    if (!User.isAdmin(ctx.user.username)) {
      ctx.user.reply("You are not an admin!");
      return;
    }
    ctx.user.reply(`Shutting down...`);
    process.exit(0);
    return;
  }
}
