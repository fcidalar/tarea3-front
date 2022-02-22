import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() data:any;
  @Input() indexElement:any;
  game:any;  
  @Output() gameDelete: EventEmitter<any>;

  constructor(private srvGames: GamesService ) { 
    this.gameDelete = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.data)
    // this.game = this.srvGames.getGame(this.data)
    this.srvGames.getGamev2(this.data).subscribe(resp =>{
      let respService:any = resp;
      this.game = respService.mensaje;
      console.log(this.game)
    })
  }

  deleteElement(index:any){     
    this.gameDelete.emit(index);
  }

}
