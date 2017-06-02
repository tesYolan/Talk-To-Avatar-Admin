import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormConfigurationComponent } from './dynamic-form-configuration.component';
import { ConfigurationControlService } from './configuration-control.service';
@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ DynamicFormConfigurationComponent ],
  providers: [ ConfigurationControlService ],
  exports: [ DynamicFormConfigurationComponent ]
})
export class FormConfigurationModule {}
