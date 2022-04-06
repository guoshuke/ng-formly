import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Demo1Component} from "./demo1.component";
import {ThemeModule} from "../theme.module";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: Demo1Component}
]

@NgModule({
  declarations: [Demo1Component],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo1Module { }
