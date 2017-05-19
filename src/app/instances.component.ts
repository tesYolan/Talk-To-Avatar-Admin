import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Instance } from './instance';
import { InstanceService } from './instance.service';
import { ConfigurationService } from './configuration.service';
import { Configuration } from './configuration';
@Component({
  selector: 'my-instances',
  templateUrl: './instances.component.html',
  //  styleUrls: [ './instances.component.css' ],
})
export class InstancesComponent implements OnInit {
  instances : Instance[];
  configuration : Configuration;
  constructor(
    private instanceService: InstanceService,
    private configurationService: ConfigurationService,
    private router: Router
  ) {}
  getInstances(): void {
    this.instanceService.getInstances().then(instances => this.instances = instances);
  }
  getConfiguration(): void {
    this.configurationService.getConfiguration().then(configuration => this.configuration = configuration);
  }
  ngOnInit(): void {
    this.getConfiguration();
    this.getInstances();
  }
  selectedInstance: Instance;

  onSelect(instance: Instance): void{
    this.selectedInstance = instance;
    console.log(this.selectedInstance);
    this.goToDetail();
  };
  create(): void{
    this.router.navigate(['/instances/create']);
  }
  goToDetail(): void {
    console.log(this.selectedInstance.name);
    this.router.navigate(['/instances', this.selectedInstance.name]);
  };
}
