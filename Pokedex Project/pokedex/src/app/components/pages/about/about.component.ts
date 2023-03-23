import { Component } from '@angular/core';
import { EventEmitterService } from 'src/app/events/event-emitter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    private eventEmitterService: EventEmitterService
  ){ }

  pkmnQTD = this.eventEmitterService.pokemon_numbers

}
