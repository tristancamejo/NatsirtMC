import { Bot } from "mineflayer";
import { Logger } from "../utils/logger";
import prompt from "prompt";

export class spawnEvent {
  constructor(bot: Bot) {
    bot.once("spawn", () => {
      const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
      mineflayerViewer(bot, { port: 3007, firstPerson: false });
      Logger.info(`Started up the viewer on port 3007`);
      Logger.info(`You can see what I see on http://localhost:3007`);

      /*
       * Chat
       */
      prompt.start();
      getMsg();
      function getMsg() {
        prompt.get(["action"], function (err, result) {
          if (err) return getMsg();

          bot.chat(result.action.toString());
          return getMsg();
        });
      }
    });
  }
}
