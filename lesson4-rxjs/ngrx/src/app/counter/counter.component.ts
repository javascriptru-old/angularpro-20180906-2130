import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../counter.reducer';

interface AppState {
  count: number
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$:Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select('count'));
  }

  ngOnInit() {
  }

  add() {
    //this.counter++
    this.store.dispatch({ type: INCREMENT });
  }

  substruct() {
    //this.counter--;
    this.store.dispatch({ type: DECREMENT });
  }

}
