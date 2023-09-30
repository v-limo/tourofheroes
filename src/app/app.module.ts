import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeDetailsComponent } from './first-app/home-details/home-details.component'
import { HomeComponent } from './first-app/home/home.component'
import { HomesComponent } from './first-app/homes/homes.component'
import { HousingLocationComponent } from './first-app/housing-location/housing-location.component'

@NgModule({
  declarations: [
    AppComponent,
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
