import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoah-commons-harness';
  dates: Array<string> = ['2018-10-01T11:10:47Z', 'August 1st, 2018', '20190103', 'im a cat'];
}