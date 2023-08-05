import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from 'src/app/interfaces/song.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() song?: Song;
  @Output() vote = new EventEmitter<Song>();

  Vote(song: Song) {
    song.votes++;
  }

  getVoteCount() {
    return this.song?.votes;
  }

  setVoteCount(value: number) {
    this.song?.votes == value;
  }

  setEntryTopDate(value: Date) {
    this.song?.entryTopDate == value;
  }

  __entryTopDate(){
    const fullDate: Date = new Date(this.song?.entryTopDate);
    const day: number = fullDate.getDate();
    const month: number = fullDate.getMonth() + 1;
    const year: number = fullDate.getFullYear();
    const hours: String = fullDate.getHours().toString();
    const mins: String = fullDate.getMinutes().toString();

    const val1: String = [day, month, year].join("-");
    const val2: String = [hours, mins].join(":");

    return [val1, val2].join(" ");
  }
}
