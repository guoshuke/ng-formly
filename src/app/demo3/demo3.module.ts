import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo3Component } from './demo3.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";

export const routes: Routes = [
  {path: '', component: Demo3Component}
]

@NgModule({
  declarations: [
    Demo3Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo3Module { }
