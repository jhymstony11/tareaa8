import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  persona = { nombre: '', apellido: '', edad: 0 };
  personas = [ {nombre: 'Lorena', apellido: 'paredes', edad: 40} ];

  agregar(){
    this.personas.push(this.persona);
    this.persona = { nombre: '', apellido: '', edad: 0 };
  }
}
