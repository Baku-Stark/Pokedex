import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/events/event-emitter.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemons:any = []

  filterPokemon:any = []

  constructor(
    private eventEmitterService: EventEmitterService
  ){ }

  searchPokemon(event: Event):void{
    const target = event.target as HTMLInputElement

    const value = target.value.toLowerCase()

    this.pokemons = this.filterPokemon.filter((s) => {
      return s.name.includes(value)
    })
  }

  async ngOnInit(){ 
    this.pokemons = await this.eventEmitterService.fetchPokemon()

    this.filterPokemon = this.pokemons
  }

}
