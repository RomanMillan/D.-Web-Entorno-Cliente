import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombres:string[] = ['Sergio','Miguel','Lucia'];
  aprobado:string[] = [];

  aprobar():void{
    this.aprobado.push(this.nombres.pop()||'')

  }


  constructor() { }

  ngOnInit(): void {
  }

}
