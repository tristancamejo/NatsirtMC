import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";
import prompt from "prompt";
import pathfinder from "mineflayer-pathfinder";

export class spawnEvent {
  constructor(bot: Bot) {
    bot.once("spawn", () => {
      bot.loadPlugin(pathfinder.pathfinder);
      const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
      mineflayerViewer(bot, { port: 3007, firstPerson: false });
      Logger.info(`Started up the viewer on port 3007`);
      Logger.info(`You can see what I see on http://localhost:3007`);

      /*
       * Chat
       */
      prompt.start();
      getMsg();
      const mcData = require("minecraft-data")(bot.version);
      const defaultMove = new pathfinder.Movements(bot, mcData);
      function getMsg() {
        prompt.get(["action"], function (err, result) {
          if (err) return getMsg();

          if (result.messaget.toString() === "coords") {
            Logger.info(
              `My current coords are X:${bot.player.entity.position.x} Y:${bot.player.entity.position.y} Z: ${bot.player.entity.position.z}`
            );
            return getMsg();
          }

          if (result.message.toString() === "exit") return process.exit(0);

          if (result.message.toString().startsWith("goto")) {
            const [, x, y, z] = result.message.toString().split(" ");
            bot.pathfinder.setMovements(defaultMove);
            bot.pathfinder.setGoal(
              new pathfinder.goals.GoalNear(
                parseInt(x),
                parseInt(y),
                parseInt(z),
                1
              )
            );
            Logger.info(`Going to ${x}, ${y}, ${z}`);
            return getMsg();
          }

          if (result.message.toString().startsWith("follow")) {
            const [, username] = result.message.toString().split(" ");
            const target = bot.players[username]
              ? bot.players[username].entity
              : null;
            if (!target) {
              Logger.info("I don't see them!");
              return;
            }
            const p = target.position;
            bot.pathfinder.setMovements(defaultMove);

            bot.pathfinder.setGoal(
              new pathfinder.goals.GoalNear(p.x, p.y, p.z, 1)
            );
            Logger.info(`Following ${username}`);
            return getMsg();
          }

          bot.chat(result.message.toString());
          return getMsg();
        });
      }
    });
  }
}
