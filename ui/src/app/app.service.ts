import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
  getAllPlayers() {
    return this.httpClient.get(`${environment.baseUrl + '/player'}`)
  }
  createPlayer(data: any) {
    return this.httpClient.post(`${environment.baseUrl + '/player/'}`, data)
  }
  getPlayerById(id: any) {
    return this.httpClient.get(`${environment.baseUrl + '/player/' + id}`)
  }
  updatePlayer(id: any, data: any) {
    return this.httpClient.put(`${environment.baseUrl + '/player/' + id}`, data)
  }
  deletePlayer(id: any) {
    return this.httpClient.delete(`${environment.baseUrl + '/player/' + id}`)
  }
  getPlayerWithMostTouchdown() {
    return this.httpClient.get(`${environment.baseUrl + '/mostTouchdown'}`)
  }
  getPlayerWithMostRushingYards() {
    return this.httpClient.get(`${environment.baseUrl + '/mostRushingYards'}`)
  }
  getPlayerWithLeastRushingYards() {
    return this.httpClient.get(`${environment.baseUrl + '/leastRushingYards'}`)
  }
  getPlayerWithSortedByGoals() {
    return this.httpClient.get(`${environment.baseUrl + '/sortedByGoals'}`)
  }
  getPlayerWithMostSacks() {
    return this.httpClient.get(`${environment.baseUrl + '/mostSacks'}`)
  }
}
