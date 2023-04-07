import { Component } from '@angular/core';

@Component({
  selector: 'app-song-top',
  templateUrl: './song-top.component.html',
  styleUrls: ['./song-top.component.scss']
})
export class SongTopComponent {
  songs = [{
    name: 'Flowers',
    artist: 'Miley Cyrus',
    entryTopDate: '2023-03-07T11:13:37.855Z',
    votes: 6,
  },
  {
    name: 'Sparks Fly',
    artist: 'Taylor Swift',
    entryTopDate: '2023-03-14T13:20:25.050Z',
    votes: 6
  },
  {
    name: 'Summertime Sadness',
    artist: 'Lana del Rey',
    entryTopDate: '2023-03-15T07:18:18.751Z',
    'votes': 6
  },
  {
    name: 'she\'s all i wanna be',
    artist: 'tate mcrae',
    entryTopDate: '2023-03-19T11:47:20.099Z',
    votes: 7
  },
  {
    name: 'Own my mind',
    artist: 'Måneskin',
    entryTopDate: '2023-03-19T19:28:46.637Z',
    votes: 3,
    id: 5
  }];
}
