import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../models/score';


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  url: string = "http://localhost:8000/scores"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.url)
  }
}
