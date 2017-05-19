import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConfigurationBase } from './configuration-base';
import { ConfigurationControlService } from './configuration-control.service';
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  //TODO move this to appmodule
  providers: [ ConfigurationControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() configurations: ConfigurationBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  request = JSON;

  constructor(
    private gcs: ConfigurationControlService,
    private configurationService : ConfigurationService
  ) { }

  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.configurations);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.request = JSON.parse(this.payLoad);
    this.configurationService.create(this.request);
  }
}
