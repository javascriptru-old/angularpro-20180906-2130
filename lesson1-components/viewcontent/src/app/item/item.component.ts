import { Component, OnInit, QueryList, ComponentFactoryResolver, ContentChild, AfterContentInit, ElementRef, ContentChildren, ViewChild, ViewChildren, AfterViewInit, ViewContainerRef } from '@angular/core';
import { NestedComponent } from '../nested/nested.component';
import { BannerComponent } from '../banner/banner.component';
import { HostDirective } from '../host.directive';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-item',
  template: `

     VIEW
     <div host>
     </div>

     <ng-content selector="h1"></ng-content>
     <ng-content selector="main"></ng-content>

    <!--<form #f="ngForm">-->
     <ng-template #t>
        <h1 colory #c="colory">
        Interesting Tempmlate
        </h1>
        <button (click)="c.changeColor('green')">Do Green!</button>
     </ng-template>

     <ng-container *ngTemplateOutlet="t"></ng-container>

     <ul>
     <li *ngFor="let time of [1,2,3,4,5]">
       <h1 *delay="time">
          Structural Directive
       </h1>
     </li>
     </ul>


     <div *ngComponentOutlet="myComponent"></div>



  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  public myComponent;
  // @ContentChild('h') headerElement: ElementRef;
  // @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent, { read: NestedComponent} ) nestedComponent: QueryList<NestedComponent>;
  // @ViewChild
  // @ViewChildren

  @ViewChild(HostDirective) host: HostDirective;

  constructor(private view: ViewContainerRef,private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
     // console.log(this.headerElement.nativeElement);
     // console.log(this.nestedComponent);
     console.log('ngAfterContentInit');
  }

  ngOnInit() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    //this.view.createComponent(componentFactory);
    this.host.view.createComponent(componentFactory);

    this.myComponent = BannerComponent;

    setTimeout(() => {
      this.myComponent = Banner2Component;
    }, 3000);
  }

}
