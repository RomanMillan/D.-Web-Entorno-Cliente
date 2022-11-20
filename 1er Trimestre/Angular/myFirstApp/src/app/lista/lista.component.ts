import { Component } from "@angular/core";

@Component({
    selector:'app-lista',
    templateUrl: './lista.component.html',
    styleUrls:['./lista.component.css']
})

export class lista{
 compra= [
     {element:'Cerveza', quantity: 100},
     {element:'Cebolla', quantity: 24},
     {element:'Batido', quantity: 1},
     {element:'Salmon', quantity: 10},
 ]
}