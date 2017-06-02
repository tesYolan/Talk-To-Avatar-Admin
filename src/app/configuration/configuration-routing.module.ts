import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ServerConfigurationComponent } from './server-configuration.component';
import { PageNotFoundComponent } from '../not-found.component';

const routes: Routes = [
  {
    path: 'configuration',
    component: ServerConfigurationComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ConfigurationRoutingModule {}
