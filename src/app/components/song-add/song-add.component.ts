import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.scss']
})
export class SongAddComponent {
  @Input() name?: string;
  @Input() artist?: string;
}
