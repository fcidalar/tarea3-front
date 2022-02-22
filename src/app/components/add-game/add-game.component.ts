import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  forma:FormGroup;
  
  constructor(private fb:FormBuilder, private gamesService : GamesService, private router: Router) { 
    this.forma = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion:['', [Validators.required, Validators.minLength(3)]],
      plataforma:['', [Validators.required, Validators.minLength(3)]],
      imagen:['', [Validators.required]],    
    })
  }

  ngOnInit(): void {      
  }

  guardar(){
    this.createGame()
  }
  createGame(){
    let obj = {
      name: this.forma.get('titulo')?.value,
      description: this.forma.get('descripcion')?.value,
      platform: this.forma.get('plataforma')?.value,
      img: "./assets/images/" + this.forma.get('imagen')?.value
      // img: "./assets/images/fifaps5.jpg"
      }
    this.gamesService.sendGame(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });
    this.router.navigate(['/games'])          
  }
}
