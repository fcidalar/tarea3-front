import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component'
import { GamesComponent } from './components/games/games.component'
import { DetailgameComponent } from "./components/detailgame/detailgame.component";
import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'newgame', component: AddGameComponent},
  {path: 'editgame/:id', component: EditGameComponent},
  {path: 'game/:id', component: DetailgameComponent},
  {path: '', redirectTo:'/games', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
