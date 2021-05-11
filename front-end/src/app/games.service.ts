import { Injectable } from '@angular/core';
import { Game } from './game/game.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  games = [
    {
      "name": "Test", 
      "date": "1-1-2020", 
      "players": ["Jan Hein", "Dirk"]
    }
  ]

  getGames(): Game[] {
    return this.games
  }
}
