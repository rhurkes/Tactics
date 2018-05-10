import Player from '../models/player';
import World from '../models/world';

function save(key: string, data: any) {
  try {
    localStorage.setItem(key, data);
  } catch (ex) {
    console.error(`Error saving ${key}: ${ex}`);
  }
}

function load(key: string): any {
  try {
    const data = JSON.parse(localStorage.getItem(key));

    return data;
  } catch (ex) {
    console.error(`Error loading ${key}: ${ex}`);

    return null;
  }
}

const playerDataKey = 'playerData';
const worldDataKey = 'worldData';

const loadPlayerData = (): Player => load(playerDataKey);
const savePlayerData = (player: Player): void => save(playerDataKey, player);

const loadWorldData = (): World => load(worldDataKey);
const saveWorldData = (world: World): void => save(worldDataKey, world);

export default {
  loadPlayerData,
  loadWorldData,
  savePlayerData,
  saveWorldData,
};
