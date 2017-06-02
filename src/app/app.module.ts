import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//COMPONENTS
import { AppComponent }  from './app.component';
//MODULES
import { AppRoutingModule } from './app-routing.module';
import { InstanceModule } from './instances/instances.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { PageNotFoundComponent } from './not-found.component';
import { FormConfigurationModule } from './common/form-configuration.module';
//For it's required to be obtained system wide for most instance.
import { ConfigurationService } from './configuration/configuration.service';
import { InstanceService } from './instances/instance.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, ConfigurationModule, InstanceModule, AppRoutingModule ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ConfigurationService, InstanceService ]
})
export class AppModule { }
