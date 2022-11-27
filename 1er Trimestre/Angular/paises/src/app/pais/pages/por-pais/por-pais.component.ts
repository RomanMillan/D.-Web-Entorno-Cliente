import { Component, OnInit } from '@angular/core';
import { PaisesServiceService } from '../../services/paises-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor(private service:PaisesServiceService) { }

  query:string = "";
  search():void{
    this.service.searchCountry(this.query);
    this.query="";
  }

  ngOnInit(): void {}
}
