import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Map, Tile } from '../models/map.model';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent{

  constructor() { }
  @Input() map: Map;

  tileClicked(tile: Tile){
    tile.blocked = !tile.blocked;
    console.log(this.map);
  }
}
