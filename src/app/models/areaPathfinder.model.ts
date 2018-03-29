import { Map, Tile } from './map.model';

export class AreaPathfinder {
  constructor(public map: Map){}

  getAreaPaths(x: number, y: number, range:number){
    let startPoint: Tile = this.map.tileAt(x, y);
    if(!startPoint){
      return null;
    }
    let pathStartPoint: PathTile = new PathTile(startPoint, 0);
    let open: PathfinderList = new PathfinderList();
    let visited: PathfinderList = new PathfinderList();

    //initialize open list with walkable neighbors of startPoint
    startPoint.adjacent.forEach(function(neighbor: Tile){
      if(!neighbor.blocked){
        open.addTile(pathStartPoint.createChild(neighbor));
      }
    });

    visited.tiles.push(pathStartPoint);

    while(open.tiles.length > 0){
      let current: PathTile = open.nextTile();

      /*
      for each tile adjacent to the current tile, do the following:
        1. Check if it's walkable
        2. if it's walkable and already on either list, or too expensive, do nothing
        3. if it's not on either list, add it
      */
      current.tile.adjacent.forEach(function(neighborTile: Tile){
        if(!neighborTile.blocked){
          let newNeighbor: PathTile = current.createChild(neighborTile);

          //if tile is already in either list, do nothing. if tile cost is too high, do nothing
          if(newNeighbor.cost <= range && !open.containsTile(newNeighbor) && !visited.containsTile(newNeighbor)){
            open.addTile(newNeighbor);
          }
        }
      });
      //after adding or ignoring all tiles adjacent to current tile, add current tile to visited list.
      //add directly because we don't care about order in the visited list
      visited.tiles.push(current);
    }

    return new PathArea(visited.tiles, pathStartPoint);
  }
}

export class PathArea {
  constructor(public tiles: PathTile[], public startPoint: PathTile){}

  pathTo(x:number, y:number){

  }
}

export class Path {
  public startPoint: Tile;
  public endPoint: Tile;
  constructor(public tiles: Tile[]){
    this.startPoint = tiles[0];
    this.endPoint = tiles[tiles.length - 1];
  }
}

export class PathTile {
  constructor(public tile: Tile, public cost: number, public parent: PathTile = null){

  }

  createChild(tile: Tile){
    return new PathTile(tile, this.cost + tile.travelCost, this);
  }

  setParent(tile: PathTile){
    this.parent = tile;
    this.cost = tile.cost + this.tile.travelCost;
  }
}

class PathfinderList {
  public tiles: PathTile[] = [];

  addTile(tile: PathTile){
    let tiles = this.tiles;
    //if list is empty or if the last element is already equal or cheaper, just append the new one
    if(tiles.length == 0 || tiles[tiles.length - 1].cost <= tile.cost){
      tiles.push(tile);
    }
    //if first element in list is more expensive than new tile, put it in front
    else if (tiles[0].cost > tile.cost){
      tiles.unshift(tile);
    }
    else {
      //cycle through tiles in reverse order
      for(let i = tiles.length - 1; i >= 0; i--){
        //if tile at current index is cheaper equal to new tile, insert new tile after it
        if(tiles[i].cost <= tile.cost){
          tiles.splice(i + 1, 0, tile);
          break;
        }
      }
    }
  }

  addTiles(tiles: PathTile[]){
    tiles.forEach(function(tile: PathTile){
      this.addTile(tile);
    });
  }

  nextTile(){
    return this.tiles.shift();
  }

  containsTile(tile: PathTile): boolean{
    return this.contains(tile.tile.pos.x, tile.tile.pos.y);
  }

  contains(x: number, y: number){
    for(let i = this.tiles.length - 1; i >= 0; i--){
      let current: PathTile = this.tiles[i];
      if(current.tile.pos.x == x && current.tile.pos.y == y){
        return true;
      }
    }
    return false;
  }

  getTile(x:number, y:number): PathTile{
    for(let i = this.tiles.length - 1; i >= 0; i--){
      let current: PathTile = this.tiles[i];
      if(current.tile.pos.x == x && current.tile.pos.y == y){
        return current;
      }
    }
    return null;
  }
}
