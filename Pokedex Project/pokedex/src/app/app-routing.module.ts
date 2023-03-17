import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT [components > pages]
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '', title:"Pokémon | HOME",
    component: HomeComponent
  },
  {
    path: 'about', title:"Pokémon | ABOUT",
    component: AboutComponent
  },
  {
    path: 'pokemon', title:"Pokémon | Pokedex",
    component: PokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
