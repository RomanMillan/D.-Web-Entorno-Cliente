import { Component, OnInit } from '@angular/core';
import { GSService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(private servicio:GSService) { }

  ngOnInit(): void {
  }

  /*
   Podemos crear un metodo y despues llamarlo con un *ngFor="let i of mostrar()"
   en este caso es importante poner los () ya que sino no funcionará
  */
  mostrar():string[]{
    return this.servicio.historial; 
    }

  /* Esto es otra manera de obtener el historial
    Es odteniendo el metodo directamente de gifs-service 
    Y esto lo podemos hacer ya que hemos inyectado previamente 
    services en el constructor.
  */
  get historial():string[]{
    return this.servicio.historial;
  }

   sidebarHistory(query:string){
     this.servicio.buscarGifs(query);
   } 

}
