import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  //TODO add Page Not Found Route, ALSO what if a person navigates to the above location when it doesn't exist.
  {
    path: '',
    redirectTo: 'instances',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
