import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssr';

  constructor(state: TransferState) {
    const items = state.get('items');
    if(!items) {
      //ajax
      state.set('items', []);
    }

  }
}
