import { Component } from '@angular/core';

// decorator de componenta
// trebuie vazut ca o functie
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Music Chart';
}
