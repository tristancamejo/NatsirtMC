import { Bot } from "mineflayer";
import { autoEater } from "..";

export class afkKillState {
  public killaura: boolean = false;
  public target: string | null = null;

  constructor(bot: Bot) {
    setInterval(() => {
      if (autoEater.eating) return;
      if (!this.killaura) return;
      if (this.target == null) return;
      const mobFilter = (e) => e.type === "mob" && e.mobType === this.target;
      const mob = bot.nearestEntity(mobFilter);

      if (this.target.startsWith("player")) {
        const username = this.target.replace("player:", "");
        const target = bot.players[username]
          ? bot.players[username].entity
          : null;
        if (!target) {
          return;
        }

        const pos = target.position;
        bot.lookAt(pos, true, () => {
          // switch to first item in hotbar
          const sword = bot.inventory.findInventoryItem(
            "netherite_sword",
            null,
            false
          );
          if (sword) {
            bot.equip(sword, "hand");
          }
          bot.setControlState("jump", true);
          bot.attack(target);
          bot.setControlState("jump", false);
        });
      }

      if (!mob) return;

      const pos = mob.position;
      bot.lookAt(pos, true, () => {
        // switch to first item in hotbar
        const sword = bot.inventory.findInventoryItem(
          "netherite_sword",
          null,
          false
        );
        if (sword) {
          bot.equip(sword, "hand");
        }
        bot.setControlState("jump", true);
        bot.attack(mob);
        bot.setControlState("jump", false);
      });
    }, 625);
  }
}
