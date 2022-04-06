import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo4Component } from './demo4.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";

export const routes: Routes = [
  {path: '', component: Demo4Component}
]

@NgModule({
  declarations: [
    Demo4Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo4Module { }
