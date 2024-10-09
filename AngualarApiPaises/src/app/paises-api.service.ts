import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesApiService {

  private apiUrl = 'https://restcountries.com/v3.1/name';

  constructor(private http: HttpClient) { }

  getPaisInfo(nombrePais: string): Observable<any> {
    const url = `${this.apiUrl}/${nombrePais}`;
    return this.http.get<any>(url);
  }
}