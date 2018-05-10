// TODO deal with hidpi in chrome: https://www.html5rocks.com/en/tutorials/canvas/hidpi/
// http://vaughnroyko.com/state-of-nearest-neighbor-interpolation-in-canvas/
// https://developers.google.com/web/updates/2015/01/pixelated

import GameConfig from './gameConfig';
import Encounter from './models/encounter';
import './styles/game.scss';
import Test from './test';
import { drawBaseLayer, drawMobLayer, initializeCanvases } from './utils/canvasUtils';
import DataHelper from './utils/dataUtils';
import WorldHelper from './utils/worldUtils';

const init = () => {
  // Set up keybindings

  // Start listening and main loop
  console.log(`Initializing game ${GameConfig.version}`);

  // Look for saved character, allow user to choose saved character or start new - TODO put this in playerHelper class
  console.log('Looking for existing characters...');
  const player = DataHelper.loadPlayerData();
  // TODO handle no player found
  if (player) { console.log('player:', player); } else { console.log('no player data found'); }

  const world = WorldHelper.getWorld();
  const party = Test.getParty();
  const encounter = Test.getEncounter(party);
  console.log(encounter);

  // Render
  initializeCanvases();
  drawBaseLayer(encounter);
  drawMobLayer(encounter);
};

init();
