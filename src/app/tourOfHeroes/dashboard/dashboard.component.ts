import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hero } from '../hero.interface';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export default class DashboardComponent implements OnInit, OnDestroy {
  dashedBoardHeros: Hero[] = [];
  subscription?: Subscription;


  constructor(
    private messageService: MessageService,
    public heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.subscription = this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        this.dashedBoardHeros = heroes.results.slice(1, 5);
        this.messageService.add('DashboardComponent: fetched 5 heroes');
      },
      error: (_err) => {
        this.messageService.add('DashboardComponent: error fetching heroes');
      },
      complete: () => {
        this.messageService.add('DashboardComponent: complete fetching heroes');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
