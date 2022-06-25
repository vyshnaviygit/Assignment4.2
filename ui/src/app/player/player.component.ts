import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  modalForm!: FormGroup;
  player: any;
  playerId: any;
  constructor(private route: ActivatedRoute, private appService: AppService, public fb: FormBuilder, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      name: new FormControl(),
      gamePlayed: [],
      receptions: [],
      recievingTargets: [],
      recievingYards: [],
      average: [],
      recievingTouchdown: [],
      longReception: [],
      rushingAttempts: [],
      rushingYards: [],
      goals: [],
      sacks: []
    });
    this.playerId = this.route.snapshot.paramMap.get('id');
    if (this.playerId) {
      this.appService.getPlayerById(this.playerId).subscribe(res => {
        this.player = res;
        this.modalForm.patchValue(this.player.data)
      })
    }
  }
  savePlayerData() {
    if (this.playerId) {
      this.appService.updatePlayer(this.playerId, this.modalForm.value).subscribe(res => {
        this.router.navigate(['/player-list'])
      })
    } else {
      this.appService.createPlayer(this.modalForm.value).subscribe(res => {
        this.router.navigate(['/player-list'])
      })
    }
  }

  goBack() {
    this.location.back();
  }

}