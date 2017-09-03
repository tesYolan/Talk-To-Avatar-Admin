import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { InstancesComponent } from './instances.component';
import { InstanceDetailComponent } from './instance-detail.component';
import { NewInstanceComponent } from './new-instance.component';

const routes: Routes = [
  {
    path: 'instances',
    component: InstancesComponent
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
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InstanceRoutingModule {}
