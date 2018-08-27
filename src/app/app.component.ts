import { Component } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor () {}
}

$(document).ready(function(): void {
  // para cuando el docuemto este listo
});
