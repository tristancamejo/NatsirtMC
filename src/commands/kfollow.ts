import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";
import { User } from "../utils/user";
import { kFollowUnit } from "..";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; args: string }) {
    if (!User.isAdmin(ctx.user.username)) {
      ctx.user.reply("You are not an admin!");
      return;
    }

    if (ctx.args === null || ctx.args === "" || ctx.args === "kfollow") {
      ctx.user.reply("You need to specify a username to follow.");
      return;
    }

    const user = ctx.args.split(" ")[0];

    if (user == "off") {
      if (!kFollowUnit.active) {
        ctx.user.reply(`My kfollow unit is already off`);
        return;
      } else {
        kFollowUnit.active = false;
        ctx.user.reply(`My kfollow unit is now off`);
        return;
      }
    } else {
      kFollowUnit.active = true;
      kFollowUnit.user = user;
      ctx.user.reply(`My kfollow unit is now on for ${user}`);
      return;
    }
  }
}
