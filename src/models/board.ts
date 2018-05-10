import Tile from "./tile";

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 12;

/**
 * Represents the tiles in an encounter as a multi-dimensional array.
 */
export default class Board {
  public width: number;
  public height: number;
  public tiles: Tile[][];

  constructor(config?: IBoardConfig) {
    if (config) {
      // TODO implement config handling
    } else {
      this.width = DEFAULT_WIDTH;
      this.height = DEFAULT_HEIGHT;
      this.tiles = [];

      let x;
      let y;

      for (y = 0; y < this.height; y++) {
        this.tiles.push([]);
        for (x = 0; x < this.width; x++) {
          this.tiles[y].push(new Tile());
        }
      }
    }
  }
}

export interface IBoardConfig {
  width: number;
  height: number;
}
