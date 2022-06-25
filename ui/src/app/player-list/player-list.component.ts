import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any;
  sortedPlayers: any[] = [];
  player: any;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.appService.getAllPlayers().subscribe((res: any) => {
      this.players = res.data;
    })
  }
  deletePlayer(playerId: any) {
    this.appService.deletePlayer(playerId).subscribe(() => {
      this.ngOnInit();
    })
  }
  mostTouchDown() {
    this.sortedPlayers = [];
    this.appService.getPlayerWithMostTouchdown().subscribe((res: any) => {
      this.player = res.data;
    })
  }
  mostRushingYards() {
    this.sortedPlayers = [];
    this.appService.getPlayerWithMostRushingYards().subscribe((res: any) => {
      this.player = res.data;
    })
  }
  leastRushingYards() {
    this.sortedPlayers = [];
    this.appService.getPlayerWithLeastRushingYards().subscribe((res: any) => {
      this.player = res.data;
    })
  }
  sortedByGoals() {
    this.player = null;
    this.appService.getPlayerWithSortedByGoals().subscribe((res: any) => {
      this.sortedPlayers = res.data;
    })
  }
  mostSacks() {
    this.sortedPlayers = [];
    this.appService.getPlayerWithMostSacks().subscribe((res: any) => {
      this.player = res.data;
    })
  }

}
