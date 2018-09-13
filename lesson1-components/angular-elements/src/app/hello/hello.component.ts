import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  @Input() name;
  @Output() clicked = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  xxx()
  {
    this.clicked.emit('CLICK!');
  }

}
