import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ReflectiveInjector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { AdminService } from './admin.service';
import { ChildComponent } from './child/child.component';
import { NewComponent } from './new/new.component';


const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate( [UserService] );
const childInjector: ReflectiveInjector = injector.resolveAndCreateChild([UserService]);
//injector.get(UserService) !== childInjector.get(UserService)

// Platform, Compiler, NgZone - ReflectiveInjector => StaticInjector
// Module, Component - not Reflective



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
    // { provide: UserService, useClass: UserService }
    // { provide: UserService, useClass: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
