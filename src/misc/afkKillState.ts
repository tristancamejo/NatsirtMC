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
