import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";
import { User } from "../utils/user";
import { killUnit } from "..";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; args: string }) {
    if (!User.isAdmin(ctx.user.username)) {
      ctx.user.reply("You are not an admin!");
      return;
    }

    if (ctx.args === null || ctx.args === "" || ctx.args === "kill") {
      ctx.user.reply(
        "You need to specify something I should kill! mob types start with a upper case letter."
      );
      return;
    }

    const mob = ctx.args.split(" ")[0];

    if (mob == "off") {
      if (!killUnit.killaura) {
        ctx.user.reply(`My kill unit is already off`);
        return;
      } else {
        killUnit.killaura = false;
        ctx.user.reply(`My kill unit is now off`);
        return;
      }
    } else {
      killUnit.killaura = true;
      killUnit.target = mob;
      ctx.user.reply(`My kill unit is now on for ${mob}`);
      return;
    }
  }
}
