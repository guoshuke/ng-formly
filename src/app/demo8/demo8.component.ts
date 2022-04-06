import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyTemplateOptions } from '@ngx-formly/core';
import {distinctUntilChanged, map, startWith } from 'rxjs/operators';
import {FormlyJsonschema} from "@ngx-formly/core/json-schema";

interface Model {
  readonly player: string;
  readonly sport: string;
  readonly team: string;
}

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit, OnChanges {

  constructor(private formlyJsonschema: FormlyJsonschema) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
    setTimeout(() => {
      this.loadExample(this.examples[0]);
    }, 2000)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.model);
  }

  form = new FormGroup({});
  model: any;
  options = {};
  fields = [];
  simple = {
    "schema": {
      "type": "object",
      "oneOf": [
        {
          "title": "Option 1",
          "properties": {
            "lorem": {
              "title": "lorem",
              "type": "string"
            }
          },
          "required": [
            "lorem"
          ]
        },
        {
          "title": "Option 2",
          "properties": {
            "ipsum": {
              "title": "ipsum",
              "type": "string"
            }
          },
          "required": [
            "ipsum"
          ]
        }
      ]
    },
    "model": {}
  }
  oneOf = {
    "schema": {
      "type": "object",
      "oneOf": [
        {
          "title": "Option 1",
          "properties": {
            "lorem": {
              "title": "lorem",
              "type": "string"
            }
          },
          "required": [
            "lorem"
          ]
        },
        {
          "title": "Option 2",
          "properties": {
            "ipsum": {
              "title": "ipsum",
              "type": "string"
            }
          },
          "required": [
            "ipsum"
          ]
        }
      ]
    },
    "model": {}
  }


  type: string | undefined;
  examples = [
    'simple',
    'oneOf'
  ];

  loadExample(type: string) {
    // @ts-ignore
    const { schema, model } = this[type];
    this.type = type;
    this.form = new FormGroup({});
    this.options = {};
    // @ts-ignore
    this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
    this.model = model;
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }


  submit() {
    alert(JSON.stringify(this.model));
  }
}
