import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  url = environment.apiUrl + "/games"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url)
  }

  post(game: Game): Observable<Game> {
    return this.http.post<Game>(this.url, game)
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(this.url + "/" + id)
  }
}