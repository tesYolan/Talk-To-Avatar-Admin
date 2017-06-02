import { Component, OnInit } from '@angular/core';

import { InstanceService } from './instance.service';

@Component({
  selector: 'new-instance',
  templateUrl: './new-instance.component.html',
})
export class NewInstanceComponent implements OnInit{
  configurations: any[];
  instance: 'instance';

  constructor(service: InstanceService) {
    this.configurations = service.getNewInstanceConfigurationsForm()
  }
  ngOnInit(): void{
  }
}
