import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConfigurationBase } from './configuration-base';
import { ConfigurationControlService } from './configuration-control.service';
import { InstanceService } from './instance.service';
import { Router, ActivatedRoute , Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dynamic-form-instance',
  templateUrl: './dynamic-form-instance.component.html',
  //TODO move this to appmodule
})
export class DynamicFormInstanceComponent implements OnInit {

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
    private instanceService : InstanceService,
    private router: Router
  ) {}


  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.configurations);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.request = JSON.parse(this.payLoad);
    console.log('It is posting this to instances.');
    //TODO handle from the type of response it got from the system to display
    //appropriate messages to the user.
    this.instanceService.create(this.request).then(instance => this.router.navigate(['/instances']));
  }
}
