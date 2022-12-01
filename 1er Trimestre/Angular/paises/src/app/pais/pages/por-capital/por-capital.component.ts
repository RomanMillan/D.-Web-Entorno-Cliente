import { Component, OnInit } from '@angular/core';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Restcountry } from '../../interfaces/restconuntry';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {


  constructor(private service:PaisesServiceService) { }
  
  results:Restcountry[] = [];
  query:string = "";
  error:string="";

  search():void{
    const aux:string=this.query
    this.service.searchCaptial(this.query)
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


  ngOnInit(): void {
  }

}
