import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Map } from '../models/map.model';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent{

  constructor() { }
  @Input() map: Map;
  @Output() clickSender = new EventEmitter();
}
