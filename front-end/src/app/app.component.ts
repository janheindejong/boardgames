import { Component } from '@angular/core';
import { Game } from './game/game.component';
import { GamesService } from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bunnik-games';
  games: Game[]

  constructor(service: GamesService) {
    this.games = service.getGames()
  }
  
}
