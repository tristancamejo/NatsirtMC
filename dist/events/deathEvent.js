"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deathEvent = void 0;
const logger_1 = require("../utils/logger");
const playerDeathEvent = require("mineflayer-death-event");
class deathEvent {
    constructor(bot) {
        bot.loadPlugin(playerDeathEvent);
        // @ts-ignore
        bot.on("playerDeath", (data) => {
            if (data.victim.detail != null) {
                const player = data.victim.detail;
                logger_1.Logger.info(`You were killed by a player with the username of ${player.username}`);
                return;
            }
            logger_1.Logger.info(`You were killed by ${data}`);
        });
    }
}
exports.deathEvent = deathEvent;
