import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongComponent } from './components/song/song.component';
import { SongTopComponent } from './components/song-top/song-top.component';
import { SongAddComponent } from './components/song-add/song-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongTopComponent,
    SongAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
