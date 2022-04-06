import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  constructor() { }

  form = new FormGroup({});
  model: any = {text: 2};
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Type here to see the other field become enabled...',
      },
      className: 'text'
    },
    {
      key: 'text2',
      type: 'input',
      templateOptions: {
        label: 'Hey!',
        placeholder: 'This one is disabled if there is no text in the other input',
      },
      // template: `<div>${this.model.text}</div>`,
      className: 'text2',
      expressionProperties: {
        'templateOptions.disabled': (model) =>  !model.text,
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

}
