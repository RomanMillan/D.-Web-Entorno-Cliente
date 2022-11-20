import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html',
})

export class Contador{
    title = 'Contador';
    contador: number = 0;
    base: number = 5;
    
    aggregate(value:number){
        this.contador += value;
      }
}