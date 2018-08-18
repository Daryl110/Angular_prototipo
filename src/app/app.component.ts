import { Component } from '@angular/core';
import { Persona } from './Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const persona = new Persona('Daryl', 19);
    persona.imprimir();
    persona.metodo();
    console.log(persona.edad);
  }
}
