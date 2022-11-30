import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Restcountry } from '../../interfaces/restconuntry';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private service:PaisesServiceService, private activeRoute:ActivatedRoute ) { }

  code:string='';
  pais:any;

  ngOnInit(): void {
    this.code=this.activeRoute.snapshot.params['id'];
    this.service.country(this.code)
     .subscribe({
      next:(resp) => {this.pais=resp[0]},
      error:(error) => console.log(error)
     })
  }

}
