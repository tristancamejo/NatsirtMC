import { Bot, createBot } from "mineflayer";
import { reconnect } from "..";
import waitUntil from "wait-until";
export class kickEvent {
  constructor(bot: Bot) {
    bot.on("end", (reason) => {
      // Wait 10 seconds between tries, and try 9999 times
      waitUntil(
        10000,
        9999,
        function condition() {
          try {
            console.log("Bot ended, attempting to reconnect...");
            reconnect();
            return true;
          } catch (error) {
            console.log("Error: " + error);
            return false;
          }
          // Callback function that is only executed when condition is true or time allotted has elapsed
        },
        function done(result) {
          console.log("Connection attempt result was: " + result);
        }
      );
    });
  }
}
