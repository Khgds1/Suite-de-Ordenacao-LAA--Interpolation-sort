import { Component } from '@angular/core';
declare const runSort: any;
declare const runSearch: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suite-ordenacao-laa-angular';

  onClick() {
    runSort();
    runSearch();
  }
}
