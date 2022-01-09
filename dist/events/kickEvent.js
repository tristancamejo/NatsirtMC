"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kickEvent = void 0;
const logger_1 = require("../utils/logger");
class kickEvent {
    constructor(bot) {
        bot.on("kicked", (reason) => {
            logger_1.Logger.warn(`Bot was kicked from the server for\n${reason}`);
            process.exit(1);
        });
    }
}
exports.kickEvent = kickEvent;
