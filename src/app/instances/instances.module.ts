import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// TODO can't we extract out the form funcitonality to another place.

import { InstancesComponent } from './instances.component';

import { DynamicFormInstanceComponent } from './dynamic-form-instance.component';
import { InstanceRoutingModule } from './instance-routing.module';

import { InstanceDetailComponent } from './instance-detail.component';
import { NewInstanceComponent } from './new-instance.component';
import { FormConfigurationModule } from '../common/form-configuration.module';
// TODO change this to InstanceNotFoundComponent
@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormConfigurationModule,  InstanceRoutingModule ],
  declarations: [ InstancesComponent, InstanceDetailComponent, DynamicFormInstanceComponent, NewInstanceComponent, ],
})
export class InstanceModule { }
