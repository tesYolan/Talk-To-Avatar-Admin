import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConfigurationBase } from '../common/configuration-base';
import { ConfigurationControlService } from '../common/configuration-control.service';
import { InstanceService } from './instance.service';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';
import { DynamicFormConfigurationComponent } from '../common/dynamic-form-configuration.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dynamic-form-instance',
  templateUrl: './dynamic-form-instance.component.html',
  //TODO move this to appmodule
})
export class DynamicFormInstanceComponent implements OnInit {

  @Input() configurations: ConfigurationBase<any>[] = [];
  //TODO this must check for the type it's cast on to do it.
  //TODO the following two currently are useless, they where places in the hopes to remove redudancy with dynamic-form-configuraiton and this file bia using the service by the routes accessed.
  @Input() serviceRequest: any;
  @Input() requestType: String;
  form: FormGroup;
  payLoad = '';
  request = JSON;
  currentUrl = String;
  constructor(
    private gcs: ConfigurationControlService,
    private instanceService : InstanceService,
    private router: Router,
    private location: Location
  ) {}


  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.configurations);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.request = JSON.parse(this.payLoad);
    console.log('It is posting this to instances.');
    //TODO handle from the type of response it got from the system to display
    //appropriate messages to the user. One of which is there are no users.
    this.instanceService.create(this.request).then(response =>
      {
        this.router.navigate(['/instances'])
      });
  }
  goBack() {
    //TODO discrading information error indicator.
    console.log('Pressing go back');
    this.location.back();
  }
}
