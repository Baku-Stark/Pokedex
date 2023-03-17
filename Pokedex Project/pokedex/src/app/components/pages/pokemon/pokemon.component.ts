import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  async fentchPokemon(event:any){

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon`)

    if(APIResponse.status === 200){
      const data = await APIResponse.json()

      console.log(data.results)
    }
  }
}
