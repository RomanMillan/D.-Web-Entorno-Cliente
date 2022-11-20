import { Component, OnInit } from '@angular/core';
import { GSService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GSService) { }
    
   add(query:string):void{
    if(this.servicio.historial.length<10){
      if(!this.servicio.historial.includes(query)){
        this.servicio.buscarGifs(query);
      }
    }
   }
   

  ngOnInit(): void {
  }
}
