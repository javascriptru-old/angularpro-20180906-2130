import { Component, OnInit, Input, Attribute } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() type;

  constructor(@Attribute('type') public type = 'advanced') {

  }

  ngOnInit() {
  }

}
