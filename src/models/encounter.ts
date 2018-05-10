import MobStatus from '../enums/mobStatus';
import WeatherType from '../enums/weatherType';
import { getRandomOpenTile } from '../logic/boardLogic';
import Board from './board';
import Mob from './mob';
import Party from './party';
import Zone from './zone';

export default class Encounter {
  public party: Party;
  public mobs: Mob[];
  public zone: Zone;
  public board: Board;
  public weather: WeatherType;
  public conditions: any;
  public intro: string;
  public reward: any; // TODO how does this work?
  public turnQueue: any;  // TODO how does this work?
  public currentActor: Mob;

  constructor(party: Party, zone: Zone, encounterConfig: IEncounterConfig) {
    const config: IEncounterConfig = encounterConfig || {};

    // Pass-ins
    this.party = party;
    this.zone = zone;

    // Defaults
    this.weather = config.weather || WeatherType.Normal;
    this.conditions = config.conditions || null;
    this.intro = config.intro || null;
    this.reward = config.reward || null;

    // Build up mob list
    if (config.mobs) {
      // If there is a set mob list, grab that
      // If there is a partially configured mob list, build one up from the config
    } else {
      this.mobs = zone.defaultEncounterMobs;
    }

    // Build board
    // If there isn't a config, grab the default board layout from the zone
    if (config.board) {
      // If there is a set board layout, grab that
      // If there is a partially configured board layout, build one up from the config
    } else {
      this.board = zone.defaultBoard;
    }

    // Place mobs
    party.players.forEach(player => {
      // If there isn't a set location for the pcs, place them randomly in left side of board
      player.tile = getRandomOpenTile(this.board, DesiredRegion.Left);
      player.tile.open = false;
    });

    this.mobs.forEach(npc => {
      // If there isn't a set location for npcs, place them randomly in right side of board
      npc.tile = getRandomOpenTile(this.board, DesiredRegion.Right);
    });

    // Build turn queue
    this.turnQueue = generateTurnQueue(this.party, this.mobs);
    this.currentActor = this.turnQueue[0];
  }
}

export interface IEncounterConfig {
  board?: any;
  mobs?: any;
  weather?: WeatherType;
  conditions?: any;
  intro?: string;
  reward?: any;
}

/** Which portion of board mobs should be assigned to. */
export enum DesiredRegion {
  Left,
  Right,
  Center,
}

function generateTurnQueue(party: Party, mobs: Mob[]): Mob[] {
  const turnQueue: Mob[] = [];
  party.players.forEach(x => turnQueue.push(x));
  mobs.forEach(x => turnQueue.push(x));
  // Allow incapicitated units to have a turn, in case they can't act because of a temporary ailment
  // their action will remove the ailment over time
  // TODO Don't display this visually however
  turnQueue.sort((a, b) => a.delay - b.delay);

  return turnQueue;
}
