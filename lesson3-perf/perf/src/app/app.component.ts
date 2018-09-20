import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-root',
  template: `
    <svg width="550" height="550"
      (mousedown)="mouseDown($event)"
      (mousemove)="mouseMove($event)"
      (mouseup)="mouseUp($event)"
      >
      <svg:g
        box
        *ngFor="let box of boxes"
        [box]="box"
        [selected]="box.id == currentId"
        ></svg:g>
    </svg>
  `
})
export class AppComponent  implements AfterViewInit {

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;
  currentBox;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    for (let i=0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  mouseDown(event) {
    const boxComponent = event.target['BoxComponent'];
    if(boxComponent) {
      const box = boxComponent.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;

      this.currentBox = boxComponent;
      boxComponent.selected = true;
      boxComponent.update();
    }


  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentBox !== null) {
      this.updateBox(this.currentBox, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    if(this.currentBox){
      this.currentBox.selected = false;
      this.currentBox.update();
    }
    this.currentBox = null;
  }

  updateBox(boxComponent, x, y) {
    boxComponent.box.x = x;
    boxComponent.box.y = y;
    boxComponent.update();
  }

  ngAfterViewInit() {
    this.cd.detach();
  }

}