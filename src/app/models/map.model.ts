export class Map {
  private tilesGrid: Tile[][] = [];
  public constructor(tilesx: number, tilesy: number){
    for(let y = 0; y < tilesy; y++){
      let thisRow: Tile[] = [];
      for(let x = 0; x < tilesx; x++){
        let newTile: Tile = new Tile(x, y);
        thisRow.push(newTile);
      }
      this.tilesGrid.push(thisRow);
    }

    for(let tile of this.getAllTiles()){
      let adjacent: Tile[] = [];
      for(let delta = -1; delta <= 1; delta += 2){
        
      }
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
}

export class Tile {
  public pos;
  public adjacent: Tile[] = [];
  constructor(posx: number, posy:number, public blocked: boolean = false){
    this.pos = {x: posx, y: posy};
  }

  setAdjacent(tiles: Tile[]){
    this.adjacent = tiles;
  }
}
