import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConfigurationBase } from '../common/configuration-base';
import { ConfigurationControlService } from '../common/configuration-control.service';
import { ConfigurationService } from './configuration.service';
import { RouterState, ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dynamic-form-config',
  templateUrl: './dynamic-form-config.component.html',
  //TODO move this to appmodule
})
export class DynamicFormConfigComponent implements OnInit {

  @Input() configurations: ConfigurationBase<any>[] = [];
  //TODO this must check for the type it's cast on to do it.
  @Input() serviceRequest: any;
  @Input() requestType: String;
  form: FormGroup;
  payLoad = '';
  request = JSON;
  currentUrl = String;
  constructor(
    private gcs: ConfigurationControlService,
    private configurationService : ConfigurationService,
    private router: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.configurations);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.request = JSON.parse(this.payLoad);
    //TODO how can re-write this funcition to make sure it outputs a function a system,
    console.log('It is posting this to configuraiton');
    this.configurationService.create(this.request);
  }
  goBack() {
    //TODO discarding information error indicator.
    this.location.back();
  }
}
