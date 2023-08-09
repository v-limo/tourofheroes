import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../services/hero.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  seletedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.messageService.add('HeroesComponent: fetched heroes');
      },
      error: (err) => {
        console.log(err);
        this.messageService.add('HeroesComponent: error fetching heroes');
      },
      complete: () => {
        this.messageService.add('HeroesComponent: fetched heroes');
        console.log('done');
      },
    });
  }

  onSelect(hero: Hero) {
    this.seletedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
