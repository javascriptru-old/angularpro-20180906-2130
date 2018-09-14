import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') mycolor = 'red';

  constructor() { }

  changeColor(color: string) {
    this.mycolor = color;
  }

}
