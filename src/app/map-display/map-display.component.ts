import { Component, Input } from '@angular/core';
import { Map } from '../models/map.model';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {

  constructor() { }

  @Input() map: Map;
}
