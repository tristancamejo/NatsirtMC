/*
 * Imports
 */
import * as mineflayer from "mineflayer";
import config from "./config";

/*
 * Start up the bot
 */
const bot = mineflayer.createBot(config);

/*
 * Load Events
 */
import { errorEvent } from "./events/errorEvent";
import { ChatEvent } from "./events/chatEvent";
import { spawnEvent } from "./events/spawnEvent";
import { kickEvent } from "./events/kickEvent";
import { deathEvent } from "./events/deathEvent";

new errorEvent(bot);
new ChatEvent(bot);
new spawnEvent(bot);
new kickEvent(bot);
new deathEvent(bot);
