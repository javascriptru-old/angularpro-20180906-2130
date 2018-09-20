import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [ UserService ],
  viewProviders: [ LogService ]

})
export class ChildComponent {

  constructor(public userService: UserService) {

  }

}
