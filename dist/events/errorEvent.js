"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorEvent = void 0;
const logger_1 = require("../utils/logger");
class errorEvent {
    constructor(bot) {
        bot.on("error", (error) => {
            logger_1.Logger.error(error);
        });
    }
}
exports.errorEvent = errorEvent;
