import WeatherType from "./enums/weatherType";
import SkeletonMob from "./mobs/skeleton";
import Board from "./models/board";
import Encounter from "./models/encounter";
import { IMobConfig } from "./models/mob";
import Party from "./models/party";
import Player from "./models/player";
import Zone from "./models/zone";

function getEncounter(party: Party): Encounter {
  const zone = new Zone(
    'grassland',
    [new SkeletonMob(), new SkeletonMob()],
    WeatherType.Normal,
    new Board(),
  );

  return new Encounter(party, zone, {});
}

function getParty(): Party {
  const party = new Party();
  const playerDetails: IMobConfig = { name: 'Sparky' };
  party.players = [new Player(playerDetails)];

  return party;
}

export default {
  getEncounter,
  getParty,
};
