import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit, OnChanges {

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
      templateOptions: {
        label: 'Some awesome text',
        placeholder: 'Some sweet text',
        required: true,
      },
    },
    {
      key: 'candy',
      type: 'select',
      templateOptions: {
        label: 'Multiple Options',
        options: [
          { label: 'Snickers', value: 'snickers' },
          { label: 'Baby Ruth', value: 'baby_ruth' },
          { label: 'Milky Way', value: 'milky_way' },
        ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
