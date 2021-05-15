import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { ScoresComponent } from './scores/scores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewGameComponent } from './new-game/new-game.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ScoresComponent,
    NewGameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, NgbModule, ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: '', 
          component: HomeComponent
        }, 
        {
          path: 'new-game', 
          component: NewGameComponent,
        }
      ]
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
