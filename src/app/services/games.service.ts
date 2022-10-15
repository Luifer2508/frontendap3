import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GamesResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }


  getVideojuegos(){
    return this.http.get<GamesResponse>('https://backend-videojuegos.herokuapp.com/videojuegos')
  }
 
}
