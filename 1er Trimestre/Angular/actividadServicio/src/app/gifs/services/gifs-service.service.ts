import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class GSService { /* GSService es un alias para que el nombre no sea tan largo */

  private _historial:string[] = [];
  private api_key:string = 'lThbqpQEf9g3L2V8uSkAvyaDjzlf0b31';
  private url:string = 'https://api.giphy.com/v1/gifs/search';
  results:Gif[] = [];

  constructor(private http:HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!)||[];
  }
  
  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query:string):void{
    let clean = query.trim().toLowerCase();
    if(clean!=="" && !this._historial.includes(clean)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', query)
    .set('limit',10)

    //OJO LO SIGUENTE NO ESTABLECES UN PARAMETRO NUEVO, DEVUELVE UN NUEVO 
    //OBJETO HTTPPARAMS CON EL ATRIBUTO3 AÑADIDO
    //params.set('atributo3',3)
    
    this.http.get<GifsSearchResponse>(this.url,{params})
    .subscribe((resp)=> this.results = resp.data

    )
  }

}
