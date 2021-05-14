import { Component, OnInit } from '@angular/core';
import { Score } from '../models/score';
import { ScoresService } from '../services/scores.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores: Score[]

  constructor(private service: ScoresService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        scores => {
          this.scores = scores; 
          console.log(scores)
        }
      )
  }

}
