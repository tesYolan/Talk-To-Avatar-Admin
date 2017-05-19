import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigurationBase } from './configuration-base';

@Component({
  selector: 'df-configuration',
  templateUrl: './dynamic-form-configuration.component.html'
})
export class DynamicFormConfigurationComponent {
  @Input() configuration: ConfigurationBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.configuration.key].valid;
  }
}
