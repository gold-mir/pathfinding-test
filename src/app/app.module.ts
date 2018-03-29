import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { TileComponent } from './tile/tile.component';
import { MapEditComponent } from './map-edit/map-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent,
    TileComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
