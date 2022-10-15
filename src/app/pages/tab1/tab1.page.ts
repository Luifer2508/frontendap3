import { Component, OnInit } from '@angular/core';
import { Game, GamesResponse } from 'src/app/interfaces';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  
  juegos:Game[] = [];

  constructor(private gamesService:GamesService) { }


  ngOnInit(){
    this.gamesService.getVideojuegos().subscribe(resp=>{
      console.log(resp);
      this.juegos = resp.games
      
    })
  }

}
