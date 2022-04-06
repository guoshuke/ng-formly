import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.model);

  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      modelOptions: {
        debounce: {
          default: 2000,
        },
      },
      templateOptions: {
        label: 'Debounce',
      },
    },
    {
      key: 'updateOnBlur',
      type: 'input',
      modelOptions: {
        updateOn: 'blur',
      },
      templateOptions: {
        label: '`updateOn` on Blur',
        required: true,
      },
    },
    {
      key: 'updateOnSubmit',
      type: 'input',
      modelOptions: {
        updateOn: 'submit',
      },
      templateOptions: {
        label: '`updateOn` on Submit',
        required: true,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
