import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {

  @Input() monto = 0;
  @Input() cantidad : number = 0;

  @Output() cantTotal = new EventEmitter<number>();

  aumentar(){
    this.monto += this.cantidad;
    this.cantTotal.emit(this.monto);
  }

  disminuir(){
    this.monto -= this.cantidad;
    this.cantTotal.emit(this.monto);
  }
}

/*
  Infomación del @Output()
  Tenemos que crear una variable ej: cantTotal
  y asignarle un nuevo EventEmitter<number>()

  Este no puede ser usado a menos que se emita un evento
  en este caso los botones aumentar y disminuir generan el evento y llaman
  a una función y dentro de esa función llama a la variable la cual con .emit()
  emitimos la cantidad, en este caso el monto.

  despues en el html del padre es capturado el evento y enviado a una
  función la cual procesará e evento capturado.
  En este caso mostrar la cantidad total

*/