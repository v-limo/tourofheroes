import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HeroService } from '../services/hero.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export default class DashboardComponent implements OnInit {
  dashedBoardHeros: Hero[] = [];

  constructor(
    private messageService: MessageService,
    public heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        this.dashedBoardHeros = heroes.slice(1, 5);
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
}
