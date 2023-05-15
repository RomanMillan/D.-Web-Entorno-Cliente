import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  nombre = '';
  @Output() search:EventEmitter<string> = new EventEmitter();
  
  buscar(){
    console.log(this.nombre)
  }    

  ngOnInit(): void {
  }

}
