import { Component } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class AppComponent  {
  name = 'Talk to Sophia';
}
