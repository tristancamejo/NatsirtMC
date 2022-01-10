/*
 * Imports
 */
import * as mineflayer from "mineflayer";
import pathfinder from "mineflayer-pathfinder";
import config from "./config";

/*
 * Start up the bot
 */
let bot = mineflayer.createBot(config);
bot.loadPlugin(pathfinder.pathfinder);

export function reconnect() {
  bot = mineflayer.createBot(config);
}

/*
 * Load Misc
 */
import { afkKillState } from "./misc/afkKillState";
import { kFollow } from "./misc/kfollow";

export const killUnit = new afkKillState(bot);
export const kFollowUnit = new kFollow(bot);

/*
 * Load Events
 */
import { errorEvent } from "./events/errorEvent";
import { ChatEvent } from "./events/chatEvent";
import { spawnEvent } from "./events/spawnEvent";
import { kickEvent } from "./events/kickEvent";
import { deathEvent } from "./events/deathEvent";
import { autoEat } from "./events/autoEat";

new errorEvent(bot);
new ChatEvent(bot);
new spawnEvent(bot);
new kickEvent(bot);
new deathEvent(bot);
export const autoEater = new autoEat(bot);

/*
 * Minecraft Commands
 */
bot.on("whisper", (username, message) => {
  if (username == bot.username) return;
  if (username == "me") return;
  const command = message.split(" ")[0];
  // find the command in the commands folder
  try {
    // check if the file exists

    const commandFile = require(`./commands/${command}`);
    // check if the command exists
    if (commandFile) {
      const args = message.replace(`${command} `, "");
      // run the command
      new commandFile.default(bot, {
        user: {
          username: username,
          reply: (message) => {
            bot.chat(`/msg ${username} ${message}`);
          },
        },
        args,
      });
    } else {
      // command not found
      bot.chat(`/msg ${username} Command not found`);
    }
  } catch (err) {
    bot.chat(`/msg ${username} Command not found`);
  }
});
