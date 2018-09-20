import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      #b
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]=" (selected ? 'red' : 'transparent')  "
      strokeWidth="1"></svg:rect>
  `
})
export class BoxComponent implements AfterViewInit {
  @Input() box;
  @Input() selected;

  @ViewChild('b')
  set b(el: ElementRef) {
    if(el) {
      el.nativeElement['BoxComponent'] = this;
    }
  }

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.cd.detach();
  }

  update() {
    this.cd.detectChanges();
  }
}