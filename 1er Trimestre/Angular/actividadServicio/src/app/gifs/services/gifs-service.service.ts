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

  constructor(private http:HttpClient) { }
  
  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query:string):void{
    let clean = query.trim().toLowerCase();
    if(clean!=="" && !this._historial.includes(clean)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', query)
    
    this.http.get<GifsSearchResponse>(this.url,{params})
    .subscribe((resp)=> this.results = resp.data

    )
  }

}
