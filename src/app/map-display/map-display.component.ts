import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Map, Tile } from '../models/map.model';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {

  @Input() tileSize: number = 32;
  @Input() map: Map;
  @Output() onTileClicked = new EventEmitter();

  sendTileClick(tile: Tile){
    this.onTileClicked.emit(tile);
  }

  getPositionData(tile: Tile){
    let data = {
      'position': "fixed",
      'top': `${this.tileSize * tile.pos.y}px`,
      'left': `${this.tileSize * tile.pos.x}px`,
      'height': `${this.tileSize}px`,
      'width': `${this.tileSize}px`
    };
    return data;
  }

  getClassData(tile: Tile){
    let classData = `grid-tile ${tile.blocked ? "blocked" : ""}`;
    return classData;
  }
}
