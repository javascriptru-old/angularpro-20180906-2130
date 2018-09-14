import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [ UserService ]
})
export class ChildComponent {

  constructor(public userService: UserService) {

  }

}
