import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/events/event-emitter.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemons:any = []

  searchPokemon(event:any){
    console.log('Procurando pokémon')
  }

  constructor(
    private eventEmitterService: EventEmitterService
  ){ }

  async ngOnInit(){ 
    this.pokemons = await this.eventEmitterService.fetchPokemon()

  }

}
