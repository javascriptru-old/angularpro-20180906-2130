import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { MyPreload } from './lazy/mypreload';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule',
    data: {
      nopreload: true
    } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreload })],
  exports: [RouterModule],
  providers: [ MyPreload ]
})
export class AppRoutingModule { }
