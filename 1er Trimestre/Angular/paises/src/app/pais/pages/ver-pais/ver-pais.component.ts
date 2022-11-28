import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesServiceService } from '../../services/paises-service.service';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:PaisesServiceService) { 
    console.log(route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

  get results(){
    return this.service.results
  }

}
