import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { NestedComponent } from './nested/nested.component';
import { ColoryDirective } from './colory.directive';
import { ChildComponent } from './child/child.component';
import { DelayDirective } from './delay.directive';
import { BannerComponent } from './banner/banner.component';
import { HostDirective } from './host.directive';
import { Banner2Component } from './banner2/banner2.component';
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NestedComponent,
    ColoryDirective,
    ChildComponent,
    DelayDirective,
    BannerComponent,
    HostDirective,
    Banner2Component,
    ConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ BannerComponent, Banner2Component ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
