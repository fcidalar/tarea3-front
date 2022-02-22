import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent implements OnInit {

  game:any;
  id:any;
  constructor( private activateRouter: ActivatedRoute, private gamesService : GamesService ) {

    this.activateRouter.params.subscribe( data => {       
      this.id =data['id'];
      this.gamesService.getGamev2(this.id).subscribe(resp =>{
        let data:any = resp;
        this.game = data.mensaje;
      });      
    });
   }

  ngOnInit(): void {
  }

}
