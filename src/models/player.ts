import mobArt from '../lists/mobArt';
import Mob, { IMobConfig } from './mob';

export default class Player extends Mob {
  constructor(config: IMobConfig) {
    if (!config.art) {
      config.art = mobArt.player;
    }

    super(config);
  }
}
