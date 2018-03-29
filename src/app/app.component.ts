import { Component } from '@angular/core';
import { Map, Tile } from './models/map.model';
import { Point } from './models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public map: Map;
  constructor(){
    this.map = new Map(16, 16);
    let map = this.map;
    console.log(map.tilesGrid);
    let tiles = map.tilesGrid;
    for(let x = 0; x < tiles.length; x++){
      for(let y = 0; y < tiles[0].length; y++){
        let tile: Tile = tiles[x][y];
        if(tile.pos.x != x || tile.pos.y != y){
          console.log(`Tile Position: (${tile.pos.x}, ${tile.pos.y} Array Position: (${x}, ${y}))`);
        }
      }
    }
  }
}
