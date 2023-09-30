import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDetailsComponent } from './first-app/home-details/home-details.component';
import { HomesComponent } from './first-app/homes/homes.component';
import DashboardComponent from './tourOfHeroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './tourOfHeroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './tourOfHeroes/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'heroes/:urlId',
    component: HeroDetailComponent,
  },
  {
    path: 'homes',
    component: HomesComponent,
  },
  {
    path: 'homes/:id',
    component: HomeDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
