import { Bot } from "mineflayer";
import { NatsirtUser } from "../types";

export default class {
  constructor(bot: Bot, ctx: { user: NatsirtUser; message: string }) {
    const commands = [
      `/msg ${bot.username} chat <command> - Types <command> in chat, if it doesn't start with a / then it won't be executed and it will just say it in the chat`,
      `/msg ${bot.username} coords - Shows the bot's current coordinates`,
      `/msg ${bot.username} exit - Exits the bot`,
      `/msg ${bot.username} help - Shows this message`,
      `/msg ${bot.username} goto <x> <y> <z> - Pathfinds the bot to the specified coordinates`,
      `/msg ${bot.username} goto follow <player> - Pathfinds the bot to the specified player`,
      `/msg ${bot.username} kill <mob | off> - Kills mobs when they are near the bot, all mob types start with a upper case letter`,
    ];

    const allowedPlayers = ["twisttaan", "joex92"];

    const message = `Commands\n${commands.join("\n")}\n${allowedPlayers.join(
      ", "
    )}`;

    message.split("\n").forEach((line) => {
      ctx.user.reply(line);
    });
    return;
  }
}
