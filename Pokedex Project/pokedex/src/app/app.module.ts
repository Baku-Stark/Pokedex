import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';
import { NewPkmnComponent } from './components/pages/new-pkmn/new-pkmn.component';
import { EventEmitterService } from './events/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PokemonComponent,
    NewPkmnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventEmitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
