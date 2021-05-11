import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bunnik-games';
  games = [
    {
      "name": "Test", 
      "date": "1-1-2020", 
      "players": ["Jan Hein", "Dirk"]
    }
  ]
}
