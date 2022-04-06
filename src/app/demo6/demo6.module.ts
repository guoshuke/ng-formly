import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo6Component } from './demo6.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";

export const routes: Routes = [
  {path: '', component: Demo6Component}
]

@NgModule({
  declarations: [
    Demo6Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo6Module { }
