import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  url: string = "http://localhost:8000/games"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url)
  }
}