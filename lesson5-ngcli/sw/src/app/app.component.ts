import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw';

  constructor(private updates: SwUpdate, push: SwPush) {
     this.updates.available.subscribe(() => {
       console.log('App was updated!');
     });

     // this.updates.checkForUpdate();

     push.messages.subscribe((message) => {
        // dialogue notification "message"
     });
  }
}
