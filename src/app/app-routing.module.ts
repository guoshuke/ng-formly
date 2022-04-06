import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from "./index/index.component";

export const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "demo1", loadChildren: () => import('./demo1/demo1.module').then(m => m.Demo1Module)},
  {path: "demo2", loadChildren: () => import('./demo2/demo2.module').then(m => m.Demo2Module)},
  {path: "demo3", loadChildren: () => import('./demo3/demo3.module').then(m => m.Demo3Module)},
  {path: "demo4", loadChildren: () => import('./demo4/demo4.module').then(m => m.Demo4Module)},
  {path: "demo5", loadChildren: () => import('./demo5/demo5.module').then(m => m.Demo5Module)},
  {path: "demo6", loadChildren: () => import('./demo6/demo6.module').then(m => m.Demo6Module)},
  {path: "demo7", loadChildren: () => import('./demo7/demo7.module').then(m => m.Demo7Module)},
  {path: "demo8", loadChildren: () => import('./demo8/demo8.module').then(m => m.Demo8Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
