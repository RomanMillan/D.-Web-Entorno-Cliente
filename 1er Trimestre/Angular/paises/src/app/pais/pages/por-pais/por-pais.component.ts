import { Component, OnInit } from '@angular/core';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Restcountry } from '../../interfaces/restconuntry';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor(private service:PaisesServiceService) { }
  
  results:Restcountry[] = [];
  query:string = "";
  error:string="";

  search():void{
    const aux:string=this.query
    this.service.searchCountry(this.query)
    .subscribe({
      next:(resp)=>{
        this.results = resp
        this.error= "";
      },
      error: (error) => {
        this.error = aux
        this.results = []
      }
    })
    this.query="";
  }


  ngOnInit(): void {}
}
