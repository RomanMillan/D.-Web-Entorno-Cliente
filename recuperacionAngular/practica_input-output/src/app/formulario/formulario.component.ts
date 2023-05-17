import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  nombre : string = '';
  password : string = '';

  @Output() enviarNombre = new EventEmitter<string>();
  @Output() enviarPassword = new EventEmitter<string>();

  enviar(){
    this.enviarNombre.emit(this.nombre);
    this.enviarPassword.emit(this.password);
  }

}
