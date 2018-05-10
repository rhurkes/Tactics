import Encounter from "../models/encounter";
import Mob from "../models/mob";

const CANVASES: HTMLCanvasElement[] =
  Array.from(document.querySelectorAll('#canvas-container > canvas') as NodeListOf<HTMLCanvasElement>);
const CVS_BASE: HTMLCanvasElement = document.getElementById('cvs-base') as HTMLCanvasElement;
const CTX_BASE: CanvasRenderingContext2D = CVS_BASE.getContext('2d');
const CVS_MOBS: HTMLCanvasElement = document.getElementById('cvs-mobs') as HTMLCanvasElement;
const CTX_MOBS: CanvasRenderingContext2D = CVS_MOBS.getContext('2d');
const CANVAS_WIDTH: number = 640;
const CANVAS_HEIGHT: number = 480;

function translateX(x: number) {
  return 8 + (x * 26);
}

function translateY(y: number) {
  return -6 + (y + 1) * 40;
}

function clearCanvas(context: CanvasRenderingContext2D) {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function initializeCanvases() {
  CANVASES.forEach(x => {
    x.width = CANVAS_WIDTH;
    x.height = CANVAS_HEIGHT;

    const ctx = x.getContext('2d');
    ctx.font = '44px Courier';
    ctx.fillStyle = '#fff';
  });
}

// TODO try pre-rendering characters if more speed needed:
// http://atomicrobotdesign.com/blog/web-development/prerender-text-for-html5-canvas-to-speed-up-your-code/
function drawBaseLayer(encounter: Encounter) {
  let x;
  let y;
  let ypx;
  let tile;

  clearCanvas(CTX_BASE);

  for (y = 0; y < 12; y++) {
    ypx = translateY(y);

    for (x = 0; x < 24; x++) {
      tile = encounter.board.tiles[y][x];
      CTX_BASE.fillStyle = tile.art.color;
      CTX_BASE.fillText(tile.art.char, translateX(x), ypx);
    }
  }
}

function drawMobLayer(encounter: Encounter) {
  function drawMob(mob: Mob) {
    CTX_BASE.fillStyle = mob.art.color;
    CTX_BASE.fillText(mob.art.char, translateX(mob.tile.x), translateY(mob.tile.y));
  }

  clearCanvas(CTX_MOBS);

  encounter.party.players.forEach(drawMob);
  encounter.mobs.forEach(drawMob);
}

export {
  drawBaseLayer,
  drawMobLayer,
  initializeCanvases,
};
