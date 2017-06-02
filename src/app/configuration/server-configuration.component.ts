import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'server-configuration',
  templateUrl: './server-configuration.component.html',
})
export class ServerConfigurationComponent implements OnInit{
  configurations: any[];
  config: 'config';

  constructor(service: ConfigurationService) {
    this.configurations = service.getConfigurationsForm();
  }
  ngOnInit(): void {
  }
}
