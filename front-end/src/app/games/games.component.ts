import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[]

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        games => {
          this.games = games;
          console.log(games)
        }
      )

  }

}
