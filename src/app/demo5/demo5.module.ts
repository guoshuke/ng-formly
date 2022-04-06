import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo5Component } from './demo5.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";

export const routes: Routes = [
  {path: '', component: Demo5Component}
]

@NgModule({
  declarations: [
    Demo5Component
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo5Module { }
