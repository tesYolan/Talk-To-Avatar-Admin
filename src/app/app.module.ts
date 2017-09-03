import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { InstanceModule } from './instances/instances.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { PageNotFoundComponent } from './not-found.component';
import { ConfigurationService } from './configuration/configuration.service';
import { InstanceService } from './instances/instance.service';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule, ToastModule.forRoot(),
    ConfigurationModule, InstanceModule, AppRoutingModule ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ConfigurationService, InstanceService ]
})
export class AppModule { }
