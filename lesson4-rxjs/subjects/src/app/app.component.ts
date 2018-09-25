import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public subscribersValues: number[][] = [];
  public subscriberIndex = 0;
  public counter = 0;

  // public subject = new Subject<number>();
  // public subject = new BehaviorSubject<number>(0);
  // public subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 3000);
  public subject = new AsyncSubject<number>();

  emitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues)
    this.subject.subscribe(value => subscriberValues.push(value));
  }
}
