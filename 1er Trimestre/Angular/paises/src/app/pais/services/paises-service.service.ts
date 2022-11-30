import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Restcountry } from '../interfaces/restconuntry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private url:string = 'https://restcountries.com/v3.1/';
  
  constructor(private http:HttpClient) {}
  
  searchCountry(query:string):Observable<Restcountry[]>{
    return this.http.get<Restcountry[]>(`${this.url}name/${query}`) 
  }

  country(code:string):Observable<Restcountry[]>{
    return this.http.get<Restcountry[]>(`${this.url}alpha/${code}`)
  }
}
