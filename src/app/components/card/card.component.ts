import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";
import { Router } from "@angular/router"
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput:Game = {name:"",description:"",platform:"",img:""};
  @Input() indexInput: number =0;
  @Output() selectGame: EventEmitter<any>;
  @Output() recargarPagina: EventEmitter<any>;


  constructor(private router:Router, private gamesService : GamesService) { 
    this.selectGame = new EventEmitter();
    this.recargarPagina = new EventEmitter();
  }

  ngOnInit(): void {
  }

  buyGame(){
    console.log(this.indexInput);
    this.selectGame.emit(this.indexInput);
  }

  detailGame(index:any){
    this.router.navigate(['/game', index])
  }

  deleteGame(index:any){
    console.log(index);
    this.gamesService.deleteGame(index).subscribe(resp =>{

      console.log(resp);
      this.recargarPagina.emit();
    });
    
  }


}
