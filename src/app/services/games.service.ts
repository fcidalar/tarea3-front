import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

private url ='http://localhost:3001';

  private items:any = [
    {      
      name:"Super Mario Kart",
      description: "Juego de aventuras",
      platform : "Nintendo",
      img : "./assets/images/mariokart.jpg"
    },
    {
      name:"Gran turismo",
      description: "Juego de carreras",
      platform : "PlayStation",
      img : "./assets/images/gt.jpg"
    },
    {
      name:"GTA",
      description: "Juego de aventuras",
      platform : "Todas las plataformas",
      img : "./assets/images/gta.jpg"
    },
    {
      name:"Mortal Kombat",
      description: "Juego de peleas",
      platform : "Todas las plataformas",
      img : "./assets/images/mk.jpg"
    },
    {
      name:"Pokemon",
      description: "Juego de estrategia y aventura",
      platform : "Nintendo Switch",
      img : "./assets/images/pokemon.jpg"
    }
  ];

  constructor(private http:HttpClient) { }


  getData(){
    return this.items;
  }

  getDatav2(){
    return this.http.get(this.url+ '/products');
  }
  
  getGame(id:any){
    return this.items[id];
  }
  getGamev2(id:any){        
    return this.http.get(`${this.url}/product/${id}`);
  }
  updateGame(data:any){
    return this.http.put(`${this.url}/product/${data.id}`, data);
  }

  sendGame(game:any){    
    return this.http.post(this.url + '/product', game);
  }

  deleteGame(id:any){   
    console.log(id);     
    return this.http.delete(`${this.url}/product/${id}`);
  }



  


  
}
