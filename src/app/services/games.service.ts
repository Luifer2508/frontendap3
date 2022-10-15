import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }


  getVideojuegos(){
    return this.http.get('https://backend-videojuegos.herokuapp.com/videojuegos')
  }
 
}
