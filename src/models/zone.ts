import WeatherType from '../enums/weatherType';
import Board from './board';
import Mob from './mob';

export default class Zone {
  public name: string;
  public defaultEncounterMobs: any;
  public defaultWeatherType: WeatherType;
  public defaultBoard: any;

  constructor(name: string, mobs: Mob[], weatherType: WeatherType, board: Board) {
    this.name = name;
    this.defaultEncounterMobs = mobs;
    this.defaultWeatherType = weatherType;
    this.defaultBoard = board;
  }
}
