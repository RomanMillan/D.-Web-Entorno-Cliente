import { Component, OnInit } from '@angular/core';
import { GSService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GSService) { }
  
  query:string='';
  search():void{
      this.servicio.buscarGifs(this.query);
      this.query="";
  }
   

  ngOnInit(): void {
  }
}
