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

  mostrar():string[]{
    return this.servicio.historial; 
    }
    
}
