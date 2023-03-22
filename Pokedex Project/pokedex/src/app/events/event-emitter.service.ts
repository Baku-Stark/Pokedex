import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  pokeAPI = 'https://pokeapi.co/api/v2/pokemon'

  pokemon_numbers = 151

  pokemonsList:any = []

  constructor() { }

  async fetchPokemon(){

    this.pokemonsList.length = 0

    for(let i = 1; i <= this.pokemon_numbers; i++){
      const APIResponse = await fetch(`${this.pokeAPI}/${i}`)
      
      if(APIResponse.status === 200){
        const pokemon = await APIResponse.json()
        
        this.pokemonsList.push(pokemon)

      }
    }

    const statusCDN = '[ ANGULAR ]'
    const message = 'Ativação completa!'
    console.log(`%c ${statusCDN} %c ${message} `, 
        'background: #C4473A; color: #f0eff5; font-weight: bold;',
        'background: #f0f8ff; color: #111111; font-weight: bold;'
    );

    return this.pokemonsList
  }

}
