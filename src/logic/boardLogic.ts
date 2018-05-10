import Board from "../models/board";
import { DesiredRegion } from "../models/encounter";
import Tile from "../models/tile";

export interface ICoordinates {
  x: number;
  y: number;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinates(board: Board, desiredRegion?: DesiredRegion): ICoordinates {
  const columnWidth = Math.floor(board.width / 3);
  const sideWidth = columnWidth;
  const centerWidth = board.width % 3 === 0 ? columnWidth : board.width - (sideWidth * 2);
  let lowerBound = 0;
  let upperBound = board.width - 1;

  switch (desiredRegion) {
    case DesiredRegion.Left:
      upperBound = sideWidth - 1;
      break;
    case DesiredRegion.Center:
      lowerBound = sideWidth;
      upperBound = sideWidth + centerWidth - 1;
      break;
    case DesiredRegion.Right:
      lowerBound = board.width - sideWidth;
      break;
    default:
      break;
  }

  return {
    x: getRandomIntInclusive(lowerBound, upperBound),
    y: getRandomIntInclusive(0, board.height - 1),
  };
}

function getDistance(x1: number, x2: number, y1: number, y2: number): number {
  return Math.hypot(y1 - y2, x1 - x2);
}

function getTilesByDistance(x1: number, y1: number, tiles: Tile[][]): any {
  const results = [];
  let result;

  for (let y = 0; y < tiles.length; y++) {
    for (let x = 0; x < tiles[y].length; x++) {
      result = {
        distance: getDistance(x1, x, y1, y),
        tile: tiles[y][x],
        x,
        y,
      };

      results.push(result);
    }
  }

  results.sort((a, b) => a.distance - b.distance);

  return results;
}

function getClosestOpenTile(coordinates: ICoordinates, tiles: Tile[][]) {
  const sortedTiles = getTilesByDistance(coordinates.x, coordinates.y, tiles);

  // Skip 0, as it is the original tile
  for (let i = 1; i < sortedTiles.length; i++) {
    if (sortedTiles[i].tile.open) {
      return sortedTiles[i];
    }
  }

  console.error('No open tiles');
}

function getRandomOpenTile(board: Board, desiredRegion?: DesiredRegion): Tile {
  const randomCoordinates = getRandomCoordinates(board, desiredRegion);

  return getClosestOpenTile(randomCoordinates, board.tiles);
}

export {
  getRandomOpenTile,
};
