import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private api_key:string = 'lThbqpQEf9g3L2V8uSkAvyaDjzlf0b31';
  private url:string = 'https://api.giphy.com/v1/gifs/search';
  results:string[] = [];

  constructor(private http:HttpClient) {}
  
  searchCountry(query:string):void{
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', query)

    this.http.get(this.url, {params})
    /* .subscribe((resp)=> this.results =resp.toString) */
  }

}
