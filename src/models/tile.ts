import tileArt from "../lists/tileArt";
import Art from "./art";

const DEFAULT_TILE_ART = tileArt.default;

export default class Tile {
  public art: Art;
  public open: boolean;
  public x: number;
  public y: number;

  constructor() {
    this.art = DEFAULT_TILE_ART;
    this.open = true;
  }
}
