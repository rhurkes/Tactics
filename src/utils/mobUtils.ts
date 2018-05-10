import { ILocation } from '../models/world';
import Zone from '../models/zone';

function getLocationFromZone(zone: Zone): ILocation {
  return {
    region: null,
    world: null,
    zone: null,
  };
}

export default {

};
