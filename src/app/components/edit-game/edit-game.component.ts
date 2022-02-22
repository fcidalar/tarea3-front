import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  forma:FormGroup;
  id:any;
  constructor(private fb:FormBuilder, private gamesService : GamesService, private router:ActivatedRoute, private _route:Router) {
    this.forma = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion:['', [Validators.required, Validators.minLength(3)]],
      plataforma:['', [Validators.required, Validators.minLength(3)]],
      imagen:['', [Validators.required]],    
    })
   }

  ngOnInit(): void {
    this.router.params.subscribe(paramsId =>{
      this.id = paramsId['id']
    })    
    this.gamesService.getGamev2(this.id).subscribe(resp =>{
      console.log(resp)
      this.chargeForm(resp)
    })
  }
  guardar(){
    let obj = {
      id: this.id,
      name: this.forma.get('titulo')?.value,
      description: this.forma.get('descripcion')?.value,
      platform: this.forma.get('plataforma')?.value,
      img: this.forma.get('imagen')?.value
      // img: "./assets/images/fifaps5.jpg"
      }
    console.log(obj)
    this.gamesService.updateGame(obj).subscribe(resp =>{
      console.log(resp)
      this._route.navigate(['/games']);
    })  
  }

  chargeForm(data:any){
    let mydata = data.mensaje
    this.forma = this.fb.group({
      titulo: [mydata.name],
      descripcion:[mydata.description],
      plataforma:[mydata.platform],
      imagen:[mydata.img]
    })

    }  

}
