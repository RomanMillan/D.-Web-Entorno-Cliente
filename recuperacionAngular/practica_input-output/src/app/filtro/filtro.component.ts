import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent {

  filtro : string = '';
  @Output() buscar = new EventEmitter<string>();

  filtrar(){
    this.buscar.emit(this.filtro);
  }
}
