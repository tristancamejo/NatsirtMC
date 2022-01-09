import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; message: string }) {
    ctx.user.reply(`Pong!`);
    return;
  }
}
