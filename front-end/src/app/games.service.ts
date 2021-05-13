import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {
  
  baseUrl = "http://localhost:8000"

  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint).pipe()
  }
}
