
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  nuevo = {
    name: 'Jan',
    health: 0
  }

  characters= [
    {name:"Shelly",health:3600},
    {name:"Nita",health:3800},
    {name:"Colt",health:2800},
    {name:"Pinp",health:840},
    {name:"Mant",health:1800},
  ]

  
  constructor() { }

}
