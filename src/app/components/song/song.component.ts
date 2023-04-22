import { Component, Input } from '@angular/core';
import { Song } from 'src/app/interfaces/song.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song?: Song;

  

  __entryTopDate(){
    return new Date(this.song?.entryTopDate);
  }
}
