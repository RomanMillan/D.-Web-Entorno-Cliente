import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GSService { /* GSService es un alias para que el nombre no sea tan largo */

  private _historial:string[] = [];

  constructor() { 
    console.log('Servicio iniciado');
  }
  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query:string){
    this._historial.push(query);
  }

}
