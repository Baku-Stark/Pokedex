import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  pokeAPI = 'https://pokeapi.co/api/v2/pokemon'

  pokemon_numbers = 20

  pokemonsList:any = []

  constructor(
  ) { }

  async fetchPokemon(){

    for(let i = 1; i <= this.pokemon_numbers; i++){
      const APIResponse = await fetch(`${this.pokeAPI}/${i}`)
      
      if(APIResponse.status === 200){
        const pokemon = await APIResponse.json()

        console.log(pokemon.name)
        
        this.pokemonsList.push(pokemon)

      }
    }

    console.log(this.pokemonsList)

    return this.pokemonsList
  }

}
