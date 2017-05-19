import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { InstancesComponent } from './instances.component';
import { ServerConfigurationComponent } from './server-configuration.component';
import { InstanceDetailComponent } from './instance-detail.component';
import { NewInstanceComponent } from './new-instance.component';

const routes: Routes = [
  {
    path: 'instances',
    component: InstancesComponent
  },
  {
    path: 'configuration',
    component: ServerConfigurationComponent
  },
  {
    path: 'instances/create',
    component: NewInstanceComponent
  },
  {
    path: 'instances/:id',
    component: InstanceDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
