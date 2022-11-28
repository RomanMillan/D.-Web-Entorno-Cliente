import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Restcountry } from '../interfaces/restconuntry';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private url:string = 'https://restcountries.com/v3.1/name/';
  results:Restcountry[] = [];
  constructor(private http:HttpClient) {}
  
  searchCountry(query:string):void{
    // results:Restcountry[] =  this.http.get<Restcountry[]>
    this.http.get<Restcountry[]>(`${this.url}${query}`)
    .subscribe((resp)=> this.results =resp) 
    console.log(this.results)
  }

  
}
