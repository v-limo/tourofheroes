import {NgForOf, NgIf, NgStyle, SlicePipe, UpperCasePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import DashboardComponent from '../tourOfHeroes/dashboard/dashboard.component';
import {HeroDetailComponent} from '../tourOfHeroes/hero-detail/hero-detail.component';
import {HeroComponent} from '../tourOfHeroes/hero/hero.component';
import {HeroesComponent} from '../tourOfHeroes/heroes/heroes.component';
import {MessagesComponent} from '../tourOfHeroes/messages/messages.component';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    UpperCasePipe,
    NgIf,
    NgForOf,
    NgStyle,
    FormsModule,
    RouterLink,
    SlicePipe
  ],

  providers: [],
  exports: [
    MessagesComponent
  ]
})
export class FirstAppModule {
}
