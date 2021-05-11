import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input("name") name: string 
  @Input("date") date: string 
  @Input("players") players: string[]

}

export type Game = {
  name: string,
  date: string 
  players: string[]
}
