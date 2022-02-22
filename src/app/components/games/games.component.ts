import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";

export interface Game {
  name: string,
  description: string,
  platform: string,
  img:string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  items:Game [] = [];
  carrito: Game [] = [];
  local:any = []
  constructor(
    private gamesService : GamesService
  ) { }

  ngOnInit(): void {
    this.setUp();    
  }

  setUp(){       
    //Llamada servicio
    this.getDataService();
    // this.items = this.gamesService.getData(); 
    this.local  = localStorage.getItem('carrito');      
    if(this.local?.length > 0){
      console.log("Existen elementos en el carrito");
      this.carrito = JSON.parse(this.local);
    }
  }

  getDataService(){
    console.log("llamada servicio");
    this.gamesService.getDatav2().subscribe(resp =>{      
      let aux:any = resp;
      this.items = aux.mensaje;  
      console.log(this.items)        
    });
  }

  createGame(){
    let obj = {
            name: "FIFA 22",
            description: "Juego de deportes",
            platform: "Solo PS5",
            img: "./assets/images/fifaps5.jpg"
            }
    this.gamesService.sendGame(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });          
  }

  addCarrito(element:any){
    console.log("se agrego este item al carrito", element);
    this.carrito.push(element);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  deleteElement(element:any){
    console.log("elemento que entra" ,element)
    console.log("se eliminara ",this.carrito[element])    
    let index = this.carrito.indexOf(this.carrito[element]);    
    if (index > -1) {
      this.carrito.splice(index, 1); // 2nd parameter means remove one item only      
      localStorage.setItem('carrito', JSON.stringify(this.carrito));  
    }  

  }



}
