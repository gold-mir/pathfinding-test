import { Point } from './point.model';

export class Map {

  //tilesGrid saved as [row][column]
  public tilesGrid: Tile[][] = [];
  public lengthX: number;
  public lengthY: number;
  public constructor(tilesx: number, tilesy: number){
    this.lengthX = tilesx;
    this.lengthY = tilesy;
    for(let x = 0; x < tilesx; x++){
      let thisRow: Tile[] = [];
      for(let y = 0; y < tilesy; y++){
        let newTile: Tile = new Tile(x, y);
        thisRow.push(newTile);
      }
      this.tilesGrid.push(thisRow);
    }

    for(let tile of this.getAllTiles()){
      let adjacent: Tile[] = [];
      for(let delta = -1; delta <= 1; delta += 2){
        if(tile.pos.x + delta >= 0 && tile.pos.x + delta < tilesx){
          adjacent.push(this.tilesGrid[tile.pos.x + delta][tile.pos.y]);
        }
        if(tile.pos.y + delta >= 0 && tile.pos.y + delta < tilesy)
        adjacent.push(this.tilesGrid[tile.pos.x][tile.pos.y + delta]);
      }
      tile.setAdjacent(adjacent);
    }
  }

  getAllTiles(): Tile[]{
    let allTiles: Tile[] = [];
    this.tilesGrid.forEach(function(row: Tile[]){
      row.forEach(function(tile: Tile){
        allTiles.push(tile);
      });
    });
    return allTiles;
  }

  tileAt(x: number, y: number){
    if(x < 0 || x >= this.lengthX || y < 0 || y >= this.lengthY){
      return null;
    } else {
      return this.tilesGrid[x][y];
    }
  }
}

export class Tile {
  public pos: Point;
  public adjacent: Tile[] = [];
  public travelCost: number = 1;
  constructor(posx: number, posy:number, public blocked: boolean = false){
    this.pos = {x: posx, y: posy};
  }

  setAdjacent(tiles: Tile[]){
    this.adjacent = tiles;
  }
}
