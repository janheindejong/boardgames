import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/game';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  form = new FormGroup(
    {
      name: new FormControl(null, Validators.required), 
      duration: new FormControl(null, [Validators.required, Validators.min(1)]), 
      datetime: new FormControl(null, Validators.required), 
      participants: new FormArray([], Validators.minLength(2))
    }
  )
  isLoading = false;

  constructor(private service: GamesService, private router: Router) { }

  ngOnInit(): void { 
    this.addParticipant("John Doe", 1)
    this.addParticipant("Jane Doe", 2)

   }

  createParticipant(player: string, rank: number) {
    return new FormGroup(
      {
        player: new FormControl(player),
        rank: new FormControl(rank)
      }
    )
  }

  addParticipant(player: string, rank: number, i?: number) {
    let participants = this.form.get('participants') as FormArray;
    let newParticipant = this.createParticipant(player, rank)
    if (!(i === undefined)) {
      participants.insert(i + 1, newParticipant)
    } else {
      participants.push(newParticipant)
    }
  }

  deleteParticipant(i: number){
    let participants = this.form.get('participants') as FormArray;
    participants.removeAt(i)
  }

  submit(): void {
    this.isLoading = true
    this.service.post(this.form.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/"])
      }
    )
  }

}
