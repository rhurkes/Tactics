// import GameClass from '../enums/gameClass';
import MobStatus from '../enums/mobStatus';
import MobType from '../enums/mobType';
import Art from './art';
import Tile from './tile';

const DEFAULT_DELAY = 100;
const DEFAULT_DELAY_PER_TURN = 10;

/**
 * Mobile object base class for PCs and NPCs
 */
export default class Mob {
  public name: string;
  // public level: number;
  public health: number;
  // public class: GameClass;
  public status: MobStatus;
  public art: Art;
  public mobType: MobType;
  public canAct: boolean;
  public delay: number;
  public delayPerTurn: number;
  public tile: Tile;

  constructor(config: IMobConfig) {
    this.name = config.name;
    this.art = config.art;

    // Defaults if nothing passed
    this.status = config.status || MobStatus.Normal;
    this.delay = config.delay || DEFAULT_DELAY;
    this.delayPerTurn = config.delayPerTurn || DEFAULT_DELAY_PER_TURN;
  }
}

export interface IMobConfig {
  name: string;
  status?: MobStatus;
  art?: Art;
  delay?: number;
  delayPerTurn?: number;
}
