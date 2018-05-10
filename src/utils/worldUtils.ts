import Region from '../models/region';
import World from '../models/world';
import dataHelper from './dataUtils';
import { createUUID } from './uuidUtils';

function getWorld(): World {
  let message;
  let world = dataHelper.loadWorldData();

  if (world) {
    message = 'world found';
  } else {
    world = createNewWorld(true);
    message = 'created new world';
  }

  console.log(message, world);

  return world;
}

function createNewWorld(friendly: boolean): World {
  const world = new World();

  world.uuid = createUUID();

  // Create a first region
  const firstRegion = new Region();

  return world;
}

export default {
  getWorld,
};
