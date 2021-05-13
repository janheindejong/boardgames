import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input("game") game: Game

}

export interface Game {
  name: string;
  date: string;
  players: string[];
}
