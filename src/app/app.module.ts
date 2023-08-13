import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './firstApp/home-details/home-details.component';
import { HomeComponent } from './firstApp/home/home.component';
import { HomesComponent } from './firstApp/homes/homes.component';
import { HousingLocationComponent } from './firstApp/housing-location/housing-location.component';
import DashboardComponent from './tourOfHeroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './tourOfHeroes/hero-detail/hero-detail.component';
import { HeroComponent } from './tourOfHeroes/hero/hero.component';
import { HeroesComponent } from './tourOfHeroes/heroes/heroes.component';
import { MessagesComponent } from './tourOfHeroes/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HomesComponent,
    HomeComponent,
    HousingLocationComponent,

    HomeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
