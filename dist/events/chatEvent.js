"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEvent = void 0;
const logger_1 = require("../utils/logger");
class ChatEvent {
    constructor(bot) {
        bot.on("chat", (username, message) => {
            if (username === bot.username)
                return;
            logger_1.Logger.chat(`${username}: ${message}`);
        });
    }
}
exports.ChatEvent = ChatEvent;
