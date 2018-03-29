import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Point } from '../models/point.model';
import { Tile } from '../models/map.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
// const displayTileSideLength = 32;
export class TileComponent{
  displayTileSideLength = 32;

  constructor() {

  }

  @Input() tile:Tile;
  @Output() clickSender = new EventEmitter();

  getPositionStyle(){
    let positionStyle = {
      'position': "fixed",
      'top': `${this.displayTileSideLength * this.tile.pos.y}px`,
      'left': `${this.displayTileSideLength * this.tile.pos.x}px`,
      'height': `${this.displayTileSideLength}px`,
      'width': `${this.displayTileSideLength}px`
    };
    return positionStyle;
  }

}
