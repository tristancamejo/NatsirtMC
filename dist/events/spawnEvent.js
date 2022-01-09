"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnEvent = void 0;
const logger_1 = require("../utils/logger");
const prompt_1 = __importDefault(require("prompt"));
const mineflayer_pathfinder_1 = __importDefault(require("mineflayer-pathfinder"));
class spawnEvent {
    constructor(bot) {
        bot.once("spawn", () => {
            bot.loadPlugin(mineflayer_pathfinder_1.default.pathfinder);
            const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
            mineflayerViewer(bot, { port: 3007, firstPerson: false });
            logger_1.Logger.info(`Started up the viewer on port 3007`);
            logger_1.Logger.info(`You can see what I see on http://localhost:3007`);
            /*
             * Chat
             */
            prompt_1.default.start();
            getMsg();
            const mcData = require("minecraft-data")(bot.version);
            const defaultMove = new mineflayer_pathfinder_1.default.Movements(bot, mcData);
            function getMsg() {
                prompt_1.default.get(["action"], function (err, result) {
                    if (err)
                        return getMsg();
                    if (result.action.toString() === "coords") {
                        logger_1.Logger.info(`My current coords are X:${bot.player.entity.position.x} Y:${bot.player.entity.position.y} Z: ${bot.player.entity.position.z}`);
                        return getMsg();
                    }
                    if (result.action.toString() === "exit")
                        return process.exit(0);
                    if (result.action.toString().startsWith("goto")) {
                        const [, x, y, z] = result.action.toString().split(" ");
                        bot.pathfinder.setMovements(defaultMove);
                        bot.pathfinder.setGoal(new mineflayer_pathfinder_1.default.goals.GoalNear(parseInt(x), parseInt(y), parseInt(z), 1));
                        logger_1.Logger.info(`Going to ${x}, ${y}, ${z}`);
                        return getMsg();
                    }
                    if (result.action.toString().startsWith("follow")) {
                        const [, username] = result.action.toString().split(" ");
                        const target = bot.players[username]
                            ? bot.players[username].entity
                            : null;
                        if (!target) {
                            logger_1.Logger.info("I don't see them!");
                            return;
                        }
                        const p = target.position;
                        bot.pathfinder.setMovements(defaultMove);
                        bot.pathfinder.setGoal(new mineflayer_pathfinder_1.default.goals.GoalNear(p.x, p.y, p.z, 1));
                        logger_1.Logger.info(`Following ${username}`);
                        return getMsg();
                    }
                    bot.chat(result.action.toString());
                    return getMsg();
                });
            }
        });
    }
}
exports.spawnEvent = spawnEvent;
