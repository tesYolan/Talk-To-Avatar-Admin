import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InstancesComponent } from './instances.component';
import { InstanceService } from './instance.service';
import { ConfigurationService } from './configuration.service';
import { AppComponent }  from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormConfigurationComponent } from './dynamic-form-configuration.component';

import { ServerConfigurationComponent } from './server-configuration.component';
import { InstanceDetailComponent } from './instance-detail.component';
import { NewInstanceComponent } from './new-instance.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, InstancesComponent, ServerConfigurationComponent, DynamicFormComponent, DynamicFormConfigurationComponent, InstanceDetailComponent, NewInstanceComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ InstanceService, ConfigurationService ]
})
export class AppModule { }
