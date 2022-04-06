import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo7Component } from './demo7.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";

export const routes: Routes = [
  {path: '', component: Demo7Component}
]

@NgModule({
  declarations: [
    Demo7Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo7Module { }
