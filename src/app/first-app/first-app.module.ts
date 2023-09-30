import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import DashboardComponent from '../tourOfHeroes/dashboard/dashboard.component';
import { HeroDetailComponent } from '../tourOfHeroes/hero-detail/hero-detail.component';
import { HeroComponent } from '../tourOfHeroes/hero/hero.component';
import { HeroesComponent } from '../tourOfHeroes/heroes/heroes.component';
import { MessagesComponent } from '../tourOfHeroes/messages/messages.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [],

  providers: [],
})
export class FirstAppModule {}
