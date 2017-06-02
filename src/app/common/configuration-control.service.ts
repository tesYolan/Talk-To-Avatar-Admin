import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ConfigurationBase } from './configuration-base';

@Injectable()
export class ConfigurationControlService {
  constructor() { }

  toFormGroup(configurations: ConfigurationBase<any>[]) {
    let group: any = {};

    configurations.forEach(configuration => {
      group[configuration.key] = configuration.required ? new FormControl(configuration.value || '', Validators.required)

        : new FormControl(configuration.value || '');
    });
    return new FormGroup(group);
  }
}
