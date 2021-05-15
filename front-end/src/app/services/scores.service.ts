import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Score } from '../models/score';


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  url = environment.apiUrl + "/scores"

  constructor(private http: HttpClient) {
    console.log(this.url)
   }

  getAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.url)
  }
}
