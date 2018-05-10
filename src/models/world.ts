// TODO a world needs to be a graph: its a series of connected regions
// each region is a series of connected zones
import Region from './region';
import Zone from './zone';

export default class World {
  public regions: Region[];
  public uuid: string;
}

export interface ILocation {
  world: World;
  region: Region;
  zone: Zone;
}
