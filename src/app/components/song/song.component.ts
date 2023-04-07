import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input() entryTopDate?: any;
  @Input() votes?: number;

  @Input() name?: string;
  @Input() artist?: string;

  getVoteCount() {
    return this.votes;
  }

  setVoteCount(value: number) {
    this.votes = value;
  }

  setEntryTopDate(value: Date) {
    this.entryTopDate = value;
  }
  __entryTopDate(){
    return new Date(this.entryTopDate);
  }
}
