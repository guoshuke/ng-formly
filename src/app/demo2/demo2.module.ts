import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Demo2Component} from "./demo2.component";
import {ThemeModule} from "../theme.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', component: Demo2Component}
]

@NgModule({
  declarations: [Demo2Component],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
  ]
})
export class Demo2Module { }
