import {ModuleWithProviders, NgModule} from '@angular/core';
import {AbstractControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyFieldConfig, FormlyModule, FormlyTemplateOptions} from "@ngx-formly/core";
import {FormlyFieldCustomInput} from "./demo1/custom-input.component";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {ObjectTypeComponent} from "./demo8/object.type";
import {MultiSchemaTypeComponent} from "./demo8/multischema.type";
import { ArrayTypeComponent } from './demo8/array.type';
import { NullTypeComponent } from './demo8/null.type';
import { CommonModule } from '@angular/common';

export function minlengthValidationMessage(err: any, field: FormlyFieldConfig) {
  return `Should have atleast ${(field.templateOptions as FormlyTemplateOptions).minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err: any, field: any) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const {password, passwordConfirm} = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return {fieldMatch: {message: 'Password Not Matching'}};
}

export function multipleOfValidationMessage(err: any, field: FormlyFieldConfig) {
  return `should be multiple of ${(field.templateOptions as FormlyTemplateOptions).step}`;
}

export function exclusiveMinimumValidationMessage(err: any, field: FormlyFieldConfig) {
  return `should be > ${(field.templateOptions as FormlyTemplateOptions).step}`;
}

export function exclusiveMaximumValidationMessage(err: any, field: FormlyFieldConfig) {
  return `should be < ${(field.templateOptions as FormlyTemplateOptions).step}`;
}

export function minItemsValidationMessage(err: any, field: FormlyFieldConfig) {
  // @ts-ignore
  return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err: any, field: FormlyFieldConfig) {
  // @ts-ignore
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function constValidationMessage(err: any, field: FormlyFieldConfig) {
  // @ts-ignore
  return `should be equal to constant "${field.templateOptions.const}"`;
}

const BaseModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormlyModule.forRoot({
    validators: [
      {name: 'fieldMatch', validation: fieldMatchValidator},
    ],
    validationMessages: [
      {name: 'required', message: 'This field is required'},
      {name: 'minlength', message: minlengthValidationMessage},
      {name: 'maxlength', message: maxlengthValidationMessage},
      {name: 'min', message: minValidationMessage},
      {name: 'max', message: maxValidationMessage},
      {name: 'multipleOf', message: multipleOfValidationMessage},
      {name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage},
      {name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage},
      {name: 'minItems', message: minItemsValidationMessage},
      {name: 'maxItems', message: maxItemsValidationMessage},
      {name: 'uniqueItems', message: 'should NOT have duplicate items'},
      {name: 'const', message: constValidationMessage},
    ],
    types: [
      { name: 'string', extends: 'input' },
      {
        name: 'number',
        extends: 'input',
        defaultOptions: {
          templateOptions: {
            type: 'number',
          },
        },
      },
      {
        name: 'integer',
        extends: 'input',
        defaultOptions: {
          templateOptions: {
            type: 'number',
          },
        },
      },
      { name: 'boolean', extends: 'checkbox' },
      { name: 'enum', extends: 'select' },
      { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
      {name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field']},
      { name: 'array', component: ArrayTypeComponent },
      {name: 'object', component: ObjectTypeComponent },
      {name: 'multischema', component: MultiSchemaTypeComponent },
    ],
  }),
  FormlyModule.forRoot(),
  FormlyBootstrapModule
]


@NgModule({
  declarations: [
    FormlyFieldCustomInput,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    ArrayTypeComponent,
    NullTypeComponent
  ],
  imports: [
    ...BaseModule
  ],
  // @ts-ignore
  exports: [...BaseModule]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
