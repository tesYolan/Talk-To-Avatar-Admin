import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Instance } from './instance';
import { InstanceService } from './instance.service';

@Component({
  selector: 'instance-detail',
  templateUrl: './instance-detail.component.html',
})
export class InstanceDetailComponent implements OnInit{
  instance : Instance;
  constructor(
    private instanceService: InstanceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) =>
      this.instanceService.getInstance(params['id'])
    )
    .subscribe(instance => this.instance = instance);
  }
  goBack(): void {
    this.location.back();
  }
  launch(): void {
    //TODO launch codes go here
  }
  destroy(): void {
    //TODO destroy launch go here
  }
  share(): void {
    //TODO share code goes here.
  }
}
