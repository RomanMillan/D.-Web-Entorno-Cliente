import { Component, OnInit } from '@angular/core';
import { GSService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {

  constructor(private GifsService:GSService) { }

  ngOnInit(): void {
  }

  get results(){
    return this.GifsService.results
  }

}
