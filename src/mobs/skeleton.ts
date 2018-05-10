import MobType from "../enums/mobType";
import mobArt from "../lists/mobArt";
import Mob from "../models/mob";

export default class SkeletonMob extends Mob {
  constructor() {
    super({ name: 'Skeleton', art: mobArt.skeleton });
    this.mobType = MobType.Undead;
    this.delay = 100;
    this.delayPerTurn = 10;
  }
}
