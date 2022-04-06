import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo8Component } from './demo8.component';
import {RouterModule, Routes} from "@angular/router";
import {ThemeModule} from "../theme.module";
// import { ObjectTypeComponent } from './object.type';
// import {MultiSchemaTypeComponent} from "./multischema.type";

export const routes: Routes = [
  {path: '', component: Demo8Component}
]

@NgModule({
  declarations: [
    Demo8Component,
    // ObjectTypeComponent,
    // MultiSchemaTypeComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class Demo8Module { }
