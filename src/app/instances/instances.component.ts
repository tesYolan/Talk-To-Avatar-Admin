import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Instance } from './instance';
import { InstanceService } from './instance.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { Configuration } from '../configuration/configuration';
@Component({
  selector: 'my-instances',
  templateUrl: './instances.component.html',
  //  styleUrls: [ './instances.component.css' ],
})
export class InstancesComponent implements OnInit {
  instances: Instance[];
  configuration: Configuration;
  selectedInstance: Instance;
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
  deleteInstanceService(): void {
    this.instanceService.deleteInstances().then(instance => {this.instances = []});
  }
  ngOnInit(): void {
    this.getConfiguration();
    this.getInstances();
  }

  onSelect(instance: Instance): void {
    this.selectedInstance = instance;
    console.log(this.selectedInstance);
    this.goToDetail();
  };
  createInstances(): void {
    this.router.navigate(['/instances/create']);
  }
  deleteInstances(): void {
    this.deleteInstanceService();
  }
  goToDetail(): void {
    console.log(this.selectedInstance.name);
    this.router.navigate(['/instances', this.selectedInstance.name]);
  };
}
