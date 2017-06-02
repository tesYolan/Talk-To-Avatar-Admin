import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerConfigurationComponent } from './server-configuration.component';
import { DynamicFormConfigComponent } from './dynamic-form-config.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FormConfigurationModule } from '../common/form-configuration.module';
@NgModule({
  imports: [ CommonModule, ReactiveFormsModule,  ConfigurationRoutingModule , FormConfigurationModule],
  declarations: [ ServerConfigurationComponent,  DynamicFormConfigComponent, ],
})
export class ConfigurationModule { }
